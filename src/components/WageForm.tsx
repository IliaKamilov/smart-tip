import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../store'
import { getShift, setShiftWage } from '../store/shift/actions'
import { MapObject, Shift, Wage } from '../store/shift/types'

const WageForm: React.FC = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)
    const dispatch = useAppDispatch()

    if (!shift) return <></>

    const tip = shift.tip as MapObject<Wage>

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const n = Number(e.currentTarget.value)
        e.currentTarget.value = n.toString()

        if (n > 10000) return

        dispatch(setShiftWage({ ...shift.tip, [e.currentTarget.name]: n }))
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'credit' && e.key === 'Enter') return e.currentTarget.blur()
    }

    const labels: MapObject<{ [key in keyof Wage]: string }> = { cash: 'מזומן למשמרת', credit: 'אשראי למשמרת' }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.container}>
                {
                    Object.keys(labels).map((key, i) => (
                        <div key={i} className={classes.field}>
                            <Typography variant="subtitle2" className={classes.fieldLabel}>{labels[key as keyof Shift['tip']]}</Typography>
                            <input
                                type="number"
                                min="0"
                                max="9999"
                                name={key}
                                value={tip[key as keyof Wage]}
                                onChange={handleChange}
                                className={classes.input}
                                onFocus={e => e.currentTarget.select()}
                                onKeyUp={handleKeyUp}
                            />
                        </div>
                    ))
                }
            </div>
        </form >
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        position: 'relative',
        margin: theme.spacing(1, 0)
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    fieldLabel: {

    },
    input: {
        direction: 'ltr',
        textAlign: 'center',
        width: '80%',
        fontSize: 18,
        borderRadius: 4,
        border: '1px solid #bbb',
    }
}))

export default WageForm