import React from 'react'
import { FormControl, Input, InputLabel, makeStyles, Theme, InputAdornment, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Employee, EmployeePayload } from '../store/shift/types'
import clsx from 'clsx'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { useAppDispatch, useAppSelector } from '../store'
import { addEmployee, updateEmployeeByName } from '../store/shift/actions'
import { Alert } from '@material-ui/lab'

interface EmployeeFormProps {
    employee?: Employee
    confirmText?: string
    cancelText?: string
    onConfirm?: (input: EmployeePayload) => void
    onCancel?: () => void
    onError?: (error?: string) => void
}

type TimeTypes = 'start' | 'end'

const now = new Date()

const emptyValue: EmployeePayload = {
    name: '',
    percent: 100,
    type: 'מלצר',
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0),
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, confirmText, cancelText, onConfirm, onCancel, onError }) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const { employees } = useAppSelector(state => state.shift)
    const [input, setInput] = React.useState<EmployeePayload>(employee || emptyValue)
    const [state, setState] = React.useState<{ loading: boolean, error?: string }>({ loading: false })

    const start = (input.start.getHours() + (input.start.getMinutes() / 60))
    const end = input.end.getHours() + (input.end.getMinutes() / 60)
    const hours = (start > end ? (24 - start) + end : (+input.end - +input.start) / 1000 / 3600) || 0

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input.name || !input.type || !input.start || !input.end) return handleError('חובה למלא את כל הפרטים.')

        if (hours <= 0) return handleError('שגיאה בהזנת שעות עובד.')

        if (!employee && employees.find(e => e.name === input.name)) return handleError(`עובד בשם "${input.name}" כבר קיים ברשימה.`)

        setState({ loading: true })

        setTimeout(() => {
            if (employee) {
                const action = updateEmployeeByName(employee.name, input)
                if (action) {
                    dispatch(action)
                    return onConfirm?.(input)
                } else {
                    console.log('asd')
                    return onError?.('משהו השתבש')
                }
            }
            dispatch(addEmployee(input))
            onConfirm?.(input)
        }, 400)
    }

    const handleError = (error: string) => {
        onError?.(error)
        setState({ loading: false, error })
    }

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        onCancel?.()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (state.error) {
            onError?.(undefined)
            setState({ loading: false })
        }

        if (e.currentTarget.name === 'percent') {
            const percent = Number(e.currentTarget.value)

            if (percent > 100) return handleError('אחוז תשר חייב להיות בין 0-100.')

            e.currentTarget.value = percent.toString()
        }

        if (e.currentTarget.name === 'name') {
            const reg = new RegExp(/[א-ת]+$/gi)
            if (e.currentTarget.value.length > 20) return handleError('שם יכול להכיל 20 תווים בלבד.')
        }

        setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleTimeChange = (target: TimeTypes, date: MaterialUiPickersDate | null) => {
        if (date) {
            setInput({ ...input, [target]: new Date(date) })
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') return e.currentTarget.blur()
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                {
                    state.error && !onError &&
                    <Alert className={classes.error} severity="error">{state.error}</Alert>
                }
                <form onSubmit={handleSubmit} className={classes.form} autoComplete="off">
                    <div className={classes.row}>
                        <div className={classes.field} style={{ flex: 2 }}>
                            <FormControl required fullWidth disabled={state.loading}>
                                <InputLabel htmlFor="name">שם</InputLabel>
                                <Input autoFocus type="text" name="name" id="name" value={input.name} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <div className={classes.field}>
                            <FormControl required disabled={state.loading}>
                                <InputLabel htmlFor="type">תפקיד</InputLabel>
                                <Input required type="text" name="type" id="type" value={input.type} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <div className={classes.field}>
                            <FormControl required disabled={state.loading} style={{ width: '100%' }}>
                                <InputLabel htmlFor="percent">אחוז תשר</InputLabel>
                                <Input type="number" onKeyUp={handleKeyUp} name="percent" id="percent" value={input.percent} onChange={handleChange} inputProps={{ min: 0, max: 100 }} endAdornment={<InputAdornment position="end">%</InputAdornment>} />
                            </FormControl>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.field} style={{ flex: 2 }}>
                            <KeyboardTimePicker
                                required
                                disabled={state.loading}
                                autoOk
                                okLabel="אישור"
                                cancelLabel="בטל"
                                variant="dialog"
                                name="start"
                                label="משעה"
                                ampm={false}
                                value={input.start}
                                onChange={date => handleTimeChange('start', date)}
                                invalidDateMessage="שעה שגויה."
                            />
                        </div>
                        <div className={classes.field} style={{ flex: 2 }}>
                            <KeyboardTimePicker
                                required
                                disabled={state.loading}
                                autoOk
                                okLabel="אישור"
                                cancelLabel="בטל"
                                variant="dialog"
                                name="end"
                                label="עד שעה"
                                ampm={false}
                                value={input.end}
                                onChange={date => handleTimeChange('end', date)}
                                invalidDateMessage="שעה שגויה."
                            />
                        </div>
                        <div className={classes.field}>
                            <FormControl disabled style={{ width: '100%' }}>
                                <InputLabel htmlFor="percent">שעות</InputLabel>
                                <Input type="number" value={hours.toFixed(2)} />
                            </FormControl>
                        </div>
                    </div>
                    <div className={clsx(classes.row, classes.submit)}>
                        <Button disabled={state.loading} type="submit" color="primary">{confirmText || 'הוסף'}</Button>
                        <Button disabled={state.loading} type="button" color="secondary" onClick={handleCancel}>{cancelText || 'בטל'}</Button>
                    </div>
                </form>
            </div>
        </MuiPickersUtilsProvider>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    row: {
        display: 'flex',
        height: '100%'
    },
    field: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: theme.spacing(1, 0)
    },
    input: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submit: {
        justifyContent: 'flex-end',
        margin: theme.spacing(1, 0)
    },
    error: {
        marginBottom: theme.spacing(1)
    }
}))

export default EmployeeForm
