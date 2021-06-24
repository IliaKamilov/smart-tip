import React from 'react'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { useAppSelector } from '../store'
import { getShift } from '../store/shift/actions'

const SidePanel: React.FC = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)

    if (!shift) return <></>

    const fields: { title: string, subtitle?: string, value: string | number }[] = [
        {
            title: 'עובדים',
            value: shift.employees.length
        },
        {
            title: 'שעות',
            value: shift.hours.toFixed(2)
        },
        {
            title: 'מזומן לשעה',
            value: shift.perhour.cash.toFixed(2)
        },
        {
            title: 'אשראי לשעה',
            value: shift.perhour.credit.toFixed(2)
        },
        {
            title: 'סה"כ לשעה',
            value: (shift.perhour.cash + shift.perhour.credit).toFixed(2)
        }
    ]
    return (
        <div className={classes.root}>
            {
                fields.map((field, i) => (
                    <div className={classes.item} key={i}>
                        <Typography className="title" variant="body1">{field.title}</Typography>
                        {field.subtitle && <Typography className="subtitle" variant="caption">{field.subtitle}</Typography>}
                        <Typography variant="body1" className="value">{field.value}</Typography>
                    </div>
                ))
            }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'fixed',
        height: '100%',
        overflowY: 'auto',
        boxSizing: 'border-box',
        background: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '15%',
        userSelect: 'none',
        pointerEvents: 'none'
    },
    item: {
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        '& .title': {
            fontSize: '11px'
        },
        '&:not(:first-child)': {
            borderTop: '1px solid #000'
        },
        '&:not(:last-child)': {
            borderBottom: '1px solid #fff'
        }
    },
}))

export default SidePanel