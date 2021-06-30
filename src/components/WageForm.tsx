import React from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'
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
    const [open, setOpen] = React.useState<{ target: HTMLElement, label: 'cash' | 'credit' } | null>(null)

    if (!shift) return <></>

    const tip = shift.tip as MapObject<Wage>

    const handleChange = (target: keyof Shift['tip'], value: number) => {
        dispatch(setShiftWage({ ...shift.tip, [target]: value }))
        setOpen(null)
    }

    const labels: MapObject<{ [key in keyof Wage]: string }> = { cash: 'מזומן למשמרת', credit: 'אשראי למשמרת' }

    const isOpen = (target: keyof Shift['tip']) => {
        if (!open) return undefined

        if (open.label === target) return open.target
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.container}>
                {
                    Object.keys(labels).map((key, i) => (
                        <div key={i} className={clsx(classes.field, tip[key as keyof Shift['tip']] > 0 && classes.active)}>
                            <NumberPad
                                open={isOpen(key as keyof Shift['tip'])}
                                max={10000}
                                value={tip[key as keyof Shift['tip']]}
                                onChange={value => handleChange(key as keyof Shift['tip'], value)}
                                icon={
                                    key === 'cash'
                                        ? <LocalAtmOutlined className={clsx(classes.icon, tip[key as keyof Shift['tip']] > 0 && classes.active)} fontSize="inherit" />
                                        : <PaymentOutlined className={clsx(classes.icon, tip[key as keyof Shift['tip']] > 0 && classes.active)} fontSize="inherit" />
                                }
                                label={
                                    key === 'cash'
                                        ? 'מזומן משמרת'
                                        : 'אשראי משמרת'
                                }
                            />
                        </div>
                    ))
                }
            </Container>
        </div >
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100px',
        position: 'relative',
        display: 'flex',
        flex: 1,
        padding: theme.spacing(1, 0),
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
        borderBottom: '1px solid #eaeaea',
        paddingRight: 6,
        // boxSizing: 'border-box',
    },
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    field: {
        width: '100%',
        margin: theme.spacing(0, 2),
        boxSizing: 'border-box',
        border: '1px solid #ebebeb',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'flex-start',
        fontSize: 20,
        fontWeight: 300,
        color: '#333',
        borderRadius: theme.shape.borderRadius
    },
    icon: {
        color: '#bbb',
        width: 25,
        height: 25
    },
    active: {
        color: '#0089c0!important',
    },
    itemText: {
        fontSize: 13,
        color: '#bbb',
        textAlign: 'center'
    }
}))

export default WageForm