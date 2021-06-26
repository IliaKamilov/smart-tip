import React from 'react'
import { makeStyles, Theme, Tooltip, Button } from '@material-ui/core'
import { useAppSelector } from '../store'
import { getShift } from '../store/shift/actions'
import { CreditCardOutlined, DragHandleOutlined, LocalAtmOutlined, MonetizationOnOutlined, PauseOutlined, PeopleAltOutlined, ScheduleOutlined } from '@material-ui/icons'

interface ItemProps {
    title: string
    value: string | number
    icon?: React.ReactNode
    label: string
}

const SideItem: React.FC<ItemProps> = (props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState<boolean>(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Tooltip open={open} onClose={handleClose} arrow title={props.label} placement="left">
            <Button onClick={handleOpen} className={classes.item}>
                <div className="icon">{props.icon}</div>
                <div className="value">{props.value}</div>
                <div className="title">{props.title}</div>
            </Button>
        </Tooltip>
    )
}

const SidePanel: React.FC = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)

    if (!shift) return <></>

    const fields: ItemProps[] = [
        {
            title: 'עובדים',
            value: shift.employees.length,
            icon: <PeopleAltOutlined />,
            label: 'סה"כ עובדים במשמרת'
        },
        {
            title: 'שעות',
            value: shift.hours.toFixed(2),
            icon: <ScheduleOutlined />,
            label: 'סה"כ שעות משמרת'
        },
        {
            title: 'מזומן',
            value: shift.perhour.cash.toFixed(2),
            icon: <LocalAtmOutlined />,
            label: 'מזומן לשעה'
        },
        {
            title: 'אשראי',
            value: shift.perhour.credit.toFixed(2),
            icon: <CreditCardOutlined />,
            label: 'אשראי לשעה'
        },
        {
            title: 'סה"כ',
            value: (shift.perhour.cash + shift.perhour.credit).toFixed(2),
            icon: <MonetizationOnOutlined />,
            label: 'סה"כ מזומן ואשראי'
        }
    ]

    return (
        <div className={classes.root}>
            {
                fields.map((field, i) => <SideItem key={i} {...field} />)
            }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        height: '100%',
        overflowY: 'auto',
        boxSizing: 'border-box',
        background: '#fefefe',
        color: theme.palette.getContrastText('#fff'),
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        boxShadow: theme.shadows[1],
        paddingBottom: theme.mixins.toolbar['minHeight']
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(1),
        '& span': {
            display: 'flex',
            flexDirection: 'column'
        },
        '& .title, & .icon': {
            fontSize: '11px',
            color: '#999'
        },
        '& .icon svg': {
            width: 25,
            height: 25
        },
        '& .value': {
            fontSize: 12
        }
    },
}))

export default SidePanel