import { Icon, makeStyles, Button, TextField, Theme, CircularProgress, IconButton, Typography } from '@material-ui/core'
import { Check, CloseRounded, ScheduleRounded } from '@material-ui/icons'
import React from 'react'
import { Employee, EmployeePayload } from '../store/shift/types'
import { EnterIcon, LeaveIcon } from './EmployeeItem'
import NumberPad from './NumberPad'
import TimePad from './TimePad'
import Percent from '../percentage.svg'
import clsx from 'clsx'
import { Alert } from '@material-ui/lab'
import { useAppDispatch, useAppSelector } from '../store'
import { addEmployee, updateEmployeeByName } from '../store/shift/actions'

interface EmployeeFormProps {
    employee?: Employee
    onCancel?: () => void
    onError?: (error: string) => void
    onSuccess?: () => void
}

const date = new Date()
date.setHours(0, 0, 0, 0)

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSuccess, onCancel }) => {
    const classes = useStyles()
    const { employees } = useAppSelector(state => state.shift)
    const dispatch = useAppDispatch()
    const [input, setInput] = React.useState<EmployeePayload>({
        name: employee?.name || '',
        start: employee?.start || date,
        end: employee?.end || date,
        percent: employee?.percent || 100,
        type: employee?.type || 'מלצר'
    })

    const [state, setState] = React.useState<{ loading: boolean, errors: { target: keyof EmployeePayload, text: string }[], mainError?: string }>({ loading: false, errors: [] })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (state.errors.length > 0) return setState({ ...state, mainError: 'יש לתקן את השגיאות קודם.' })

        if (!input.name || !input.type || !input.start || !input.end) return setState({ loading: false, errors: [], mainError: 'יש לוודא שכל הפרטים הוזנו.' })

        if (getHours().before === 0) return setState({ loading: false, errors: [], mainError: 'אין אפשרות להוסיף עובד עם 0 שעות.' })

        if (!employee && employees.find(e => e.name === input.name)) return setState({ loading: false, errors: [], mainError: `"${input.name}" כבר קיים ברשימה.` })

        setState({ loading: true, errors: [] })

        setTimeout(() => {
            if (employee) {
                const action = updateEmployeeByName(employee.name, input)
                if (action) {
                    dispatch(action)
                    return onSuccess?.()
                } else {
                    return setState({ loading: false, errors: [], mainError: 'משהו השתבש יש לנסות שוב.' })
                }
            }
            dispatch(addEmployee(input))
            onSuccess?.()
        }, 400)
    }

    const handleChange = <T extends keyof EmployeePayload, V extends EmployeePayload[T]>(target: T, value: V) => {
        const isError = state.errors.find(e => e.target === target)

        if (isError) {
            setState({ ...state, errors: state.errors.filter(e => e.target !== target) })
        }

        setInput({ ...input, [target]: value })

        if (['name', 'type'].includes(target)) {
            if (value === '') {
                state.errors = state.errors.filter(e => e.target !== target)
                return setState({ ...state, errors: [...state.errors, { target, text: 'שדה חובה.' }] })
            }
            const regex = new RegExp(/^[a-zA-Zא-ת]+$/)

            if (!regex.test(value as string)) {
                state.errors = state.errors.filter(e => e.target !== target)
                return setState({ ...state, errors: [...state.errors, { target, text: 'שדה זה יכול להכיל אותיות בלבד.' }] })
            }
        }
    }

    const handleTimeChange = (target: 'start' | 'end', value: [number, number, number, number]) => {
        const date = new Date()
        date.setHours(...value)
        handleChange(target, date)

        if (!employee && target === 'start') {
            setTimeout(() => {
                document.getElementById('leave')?.click()
            }, 300)
        }

        if (!employee && target === 'end') {
            setTimeout(() => {
                document.getElementById('percent')?.click()
            }, 300)
        }
    }

    const getHours = () => {
        const start = (input.start.getHours() + (input.start.getMinutes() / 60))
        const end = input.end.getHours() + (input.end.getMinutes() / 60)
        const hours = (start > end ? (24 - start) + end : (+input.end - +input.start) / 1000 / 3600) || 0

        return { before: hours, after: (input.percent / 100) * hours }
    }

    const getTimeString = (target: 'start' | 'end'): string => {
        const value = input[target]
        return `${value.getHours() < 10 ? `0${value.getHours()}` : value.getHours().toString()}:${value.getMinutes() < 10 ? `0${value.getMinutes()}` : value.getMinutes().toString()}`
    }

    const isDisabled = () => {
        if (state.loading || !input.name || !input.type || input.percent > 100 || input.percent < 0 || !input.start || !input.end || getHours().before === 0) return true

        return false
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const next = document.getElementsByName('type')[0]
        const target = e.currentTarget.querySelector('input')

        if (e.key === 'Enter' && target?.name === 'name') {
            if (target.value === '') return setState({ loading: false, errors: [...state.errors, { target: 'name', text: 'חובה להזין שם עובד' }] })

            if (!employee) return next?.focus()

            e.preventDefault()
            target?.blur()
        }
        if (e.key === 'Enter' && target?.name === 'type') {
            if (target.value === '') {
                return setState({ ...state, errors: [...state.errors, { target: 'type', text: 'יש להזין תפקיד. דוגמה: מלצר, ברמן' }] })
            }

            e.preventDefault()
            target?.blur()

            if (!employee) {
                setTimeout(() => {
                    document.getElementById('enter')?.click()
                }, 500)
            }
        }
    }

    const handleClose = () => {
        onCancel?.()
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <div className={classes.header}>
                <Typography style={{ padding: '0 16px' }} variant="h6" component="h1">{employee ? 'עריכת עובד' : 'הוספת עובד'}</Typography>
                <IconButton onClick={handleClose}>
                    <CloseRounded />
                </IconButton>
            </div>
            {
                state.mainError && <Alert className={classes.mainError} severity="error">{state.mainError}</Alert>
            }
            <div className={classes.field}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    variant="outlined"
                    type="text"
                    label="שם עובד"
                    name="name"
                    required
                    value={input.name}
                    onChange={e => handleChange('name', e.currentTarget.value)}
                    autoFocus
                    onKeyPress={handleKeyUp}
                    error={Boolean(state.errors?.find(e => e.target === 'name'))}
                    helperText={
                        <>
                            {
                                state.errors.filter(e => e.target === 'name').map((error, i) => (
                                    <b key={i}>* {error.text}<br /></b>
                                ))
                            }
                        </>
                    }
                    inputProps={{
                        enterKeyHint: 'enter',
                    }}
                />
            </div>
            <div className={classes.field}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    variant="outlined"
                    type="text"
                    name="type"
                    label="תפקיד"
                    required
                    value={input.type}
                    onKeyPress={handleKeyUp}
                    error={Boolean(state.errors?.find(e => e.target === 'type'))}
                    helperText={
                        <>
                            {
                                state.errors.filter(e => e.target === 'type').map((error, i) => (
                                    <b key={i}>* {error.text}<br /></b>
                                ))
                            }
                        </>
                    }
                    onChange={e => handleChange('type', e.currentTarget.value)}
                />
            </div>
            <div className={clsx(classes.field, classes.items)}>
                <div className={classes.item}>
                    <TimePad
                        value={getTimeString('start')}
                        onChange={value => handleTimeChange('start', value)}
                        icon={<EnterIcon />}
                        label="כניסה"
                        id="enter"
                    />
                </div>
                <div className={classes.item}>
                    <TimePad
                        value={getTimeString('end')}
                        onChange={value => handleTimeChange('end', value)}
                        icon={<LeaveIcon />}
                        label="יציאה"
                        id="leave"
                    />
                </div>
            </div>
            <div className={clsx(classes.field, classes.items)}>
                <div className={classes.item}>
                    <div>
                        <NumberPad
                            max={100}
                            onChange={value => handleChange('percent', value)}
                            icon={<Icon style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img alt="אחוז תשר" src={Percent} width={20} height={20} color="red" />
                            </Icon>}
                            label="אחוז תשר"
                            value={input.percent}
                            id="percent"
                        />
                    </div>
                </div>
                <div className={classes.item}>
                    <Button disabled style={{ fontSize: 18 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <ScheduleRounded style={{ color: '#999' }} />
                            <div>
                                {getHours().before.toFixed(2)}
                            </div>
                            <span className={classes.itemLabel}>
                                {
                                    input.percent < 100
                                        ? <div style={{ fontSize: 12 }}>
                                            <b>{input.percent}%</b>
                                            <div>{getHours().after.toFixed(2)}ש'</div>
                                        </div>
                                        : `סה"כ שעות`
                                }
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
            <Button disableFocusRipple disableRipple disableElevation fullWidth type="submit" disabled={isDisabled()} variant="contained" className={clsx(classes.submit, isDisabled() && classes.submitDisabled)}>
                {
                    state.loading
                        ? <CircularProgress style={{ color: '#999', width: 25, height: 25 }} />
                        : <Check />
                }
            </Button>
        </form>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflow: 'hidden',
        outline: 'none',
        boxSizing: 'border-box',
        [theme.breakpoints.up(400)]: {
            width: 350
        }
    },
    header: {
        width: '100%',
        background: '#fff',
        borderBottom: '1px solid #ebebeb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
    },
    field: {
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: theme.spacing(1, 2),
        '&:first-child': {
            // marginTop: theme.spacing(1)
        }
    },
    items: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        boxSizing: 'border-box',
    },
    submit: {
        background: 'lightGreen',
        boxSizing: 'border-box',
        height: 60,
        borderRadius: 0,
        transition: theme.transitions.create(['background-color'], {
            easing: theme.transitions.easing.easeInOut
        }),
        '&:hover': {
            background: 'lightGreen',
        }
    },
    submitDisabled: {
        backgroundColor: theme.palette.grey[100]
    },
    itemLabel: {
        color: '#999',
        fontSize: 11
    },
    mainError: {
        marginBottom: theme.spacing(1)
    }
}))

export default EmployeeForm