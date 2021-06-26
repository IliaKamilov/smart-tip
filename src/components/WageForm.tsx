import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from '../store'
import { getShift, setShiftWage } from '../store/shift/actions'
import { MapObject, Shift, Wage } from '../store/shift/types'
import NumberPad from './NumberPad'
import { LocalAtmOutlined, PaymentOutlined } from '@material-ui/icons'
import clsx from 'clsx'

const WageForm: React.FC = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)
    const dispatch = useAppDispatch()

    if (!shift) return <></>

    const tip = shift.tip as MapObject<Wage>

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleChange = (target: keyof Shift['tip'], value: number) => {
        dispatch(setShiftWage({ ...shift.tip, [target]: value }))
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'credit' && e.key === 'Enter') return e.currentTarget.blur()
    }

    const labels: MapObject<{ [key in keyof Wage]: string }> = { cash: 'מזומן למשמרת', credit: 'אשראי למשמרת' }

    return (
        <div className={classes.root}>
            {
                Object.keys(labels).map((key, i) => (
                    <div key={i} className={classes.item}>
                        <div className={clsx(classes.symbol, tip[key as keyof Shift['tip']] > 0 && classes.symbolActive)}>
                            {
                                key === 'cash'
                                    ? <LocalAtmOutlined fontSize="inherit" />
                                    : <PaymentOutlined fontSize="inherit" />
                            }
                        </div>
                        <div className={classes.field}>
                            <NumberPad
                                max={10000}
                                value={tip[key as keyof Shift['tip']]}
                                onChange={value => handleChange(key as keyof Shift['tip'], value)}
                            />
                        </div>
                        <div className={classes.itemText}>
                            {
                                key === 'cash'
                                    ? 'מזומן למשמרת'
                                    : 'אשראי למשמרת'
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        margin: theme.spacing(1, 0),
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%'
    },
    field: {
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid #bbb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        fontSize: 20,
        fontWeight: 300,
        color: '#0089c0',
        borderRadius: theme.shape.borderRadius
    },
    symbol: {
        color: '#bbb',
        fontSize: 28
    },
    symbolActive: {
        color: '#0089c0',
    },
    itemText: {
        fontSize: 13,
        color: '#bbb'
    }
}))

export default WageForm