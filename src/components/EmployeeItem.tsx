import { Avatar, Button, Card, IconButton, makeStyles, Theme, Tooltip, Menu, MenuProps, MenuItem, withStyles, ListItemIcon, ListItemText, Slide, Dialog, DialogActions, DialogTitle } from '@material-ui/core'
import React from 'react'
import { Employee } from '../store/shift/types'
import clsx from 'clsx'
import { CheckRounded, CloseRounded, CreditCardRounded, FingerprintRounded, LocalAtmRounded, ScheduleRounded, AccountBalanceWalletOutlined, MoreVertRounded, EditRounded, DeleteRounded } from '@material-ui/icons'
import { TransitionProps } from '@material-ui/core/transitions'
import EmployeeForm from './EmployeeForm'
import { useAppDispatch } from '../store'
import { deleteEmployeeByName } from '../store/shift/actions'

interface EmployeeItemProps {
    employee: Employee
}

export const EnterIcon = () => {
    return (
        <div style={{ position: 'relative' }}>
            <FingerprintRounded style={{ color: 'darkGreen' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 4 }}>
                <CheckRounded style={{ background: 'rgba(255,255,255,7)', border: '.5px solid darkGreen', width: 12, height: 12, color: 'darkGreen', borderRadius: 4 }} />
            </div>
        </div>
    )
}

export const LeaveIcon = () => {
    return (
        <div style={{ position: 'relative' }}>
            <FingerprintRounded style={{ color: 'tomato' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 4 }}>
                <CloseRounded style={{ background: 'rgba(255,255,255,7)', border: '.5px solid tomato', width: 12, height: 12, color: 'tomato', borderRadius: 4 }} />
            </div>
        </div>
    )
}

const Detail: React.FC<{ label: string }> = ({ label, children }) => {
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget)
    }

    const handleClose = () => setAnchor(null)

    const open = Boolean(anchor)

    return (
        <Tooltip
            open={open}
            onClose={handleClose}
            title={label || ''}
            arrow
            disableFocusListener
        >
            <Button
                onClick={handleOpen}
            >
                {children}
            </Button>
        </Tooltip>
    )
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #999',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: '#ebebeb',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.getContrastText('#ebebeb'),
            },
        },
    },
}))(MenuItem);

export const SlideUpTransition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee }) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)
    const [editOpen, setEditOpen] = React.useState<boolean>(false)
    const [deleteOpen, setDeleteOpen] = React.useState<boolean>(false)

    const Time: React.FC<{ value: Date }> = ({ value }) => {
        const hours = value.getHours()
        const minutes = value.getMinutes()

        return (
            <>
                {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}
            </>
        )
    }

    const open = Boolean(anchor)

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget)
    }
    const handleClose = () => setAnchor(null)

    const handleEditOpen = () => {
        setEditOpen(true)
        setAnchor(null)
    }

    const handleEditClose = () => {
        setEditOpen(false)
    }

    const handleDeleteOpen = () => {
        setDeleteOpen(true)
        setAnchor(null)
    }

    const handleDeleteClose = () => setDeleteOpen(false)

    const handleDeleteConfirm = () => {
        dispatch(deleteEmployeeByName(employee.name))
        handleDeleteClose()
    }

    return (
        <>
            <Card className={classes.card}>
                <div className={clsx(classes.row, classes.fullWidth, classes.header)}>
                    <div className={classes.row} style={{ alignItems: 'center' }}>
                        <div style={{ padding: 8 }}>
                            <Avatar />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <div style={{ fontWeight: 600, fontSize: 16 }}>{employee.name}</div>
                            <div style={{ fontSize: 12, }}>{employee.type} <span style={{ fontWeight: 600 }}>{employee.percent}%</span></div>
                        </div>
                    </div>
                    <IconButton
                        onClick={handleOpen}
                    >
                        <MoreVertRounded />
                    </IconButton>
                    <StyledMenu
                        open={open}
                        anchorEl={anchor}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <StyledMenuItem onClick={handleEditOpen}>
                            <ListItemIcon>
                                <EditRounded />
                            </ListItemIcon>
                            <ListItemText primary="ערוך" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={handleDeleteOpen}>
                            <ListItemIcon>
                                <DeleteRounded />
                            </ListItemIcon>
                            <ListItemText primary="מחק" />
                        </StyledMenuItem>
                    </StyledMenu>
                </div>
                <div className={classes.body}>
                    <div className={clsx(classes.column, classes.spaceItems)}>
                        <div className={clsx(classes.row, classes.spaceItems, classes.fullWidth)}>
                            <Detail label="שעת כניסה">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <EnterIcon />
                                    <span>
                                        <Time value={employee.start} />
                                    </span>
                                </div>
                            </Detail>
                            <Detail label="שעת יציאה">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <LeaveIcon />
                                    <span>
                                        <Time value={employee.end} />
                                    </span>
                                </div>
                            </Detail>
                            <Detail label={`שעות עובד בחישוב ${employee.percent}%`}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <ScheduleRounded style={{ height: 31, color: '#999' }} />
                                    <span style={{ color: '#333' }}>{employee.hours.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                                </div>
                            </Detail>
                        </div>
                        <div className={clsx(classes.row, classes.spaceItems, classes.fullWidth)}>
                            <Detail label={`סה"כ מזומן ל${employee.name}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <LocalAtmRounded style={{ height: 31, color: '#0089c0' }} />
                                    <span style={{ color: '#333', fontSize: 16 }}>{employee.tip.cash.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                                    <span style={{ fontSize: 11, marginTop: -6, color: '#999' }}>מזומן</span>
                                </div>
                            </Detail>
                            <Detail label={`סה"כ אשראי ל${employee.name}`}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <CreditCardRounded style={{ height: 31, color: '#0089c0' }} />
                                    <span style={{ color: '#333', fontSize: 16 }}>{employee.tip.credit.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                                    <span style={{ fontSize: 11, marginTop: -6, color: '#999' }}>אשראי</span>
                                </div>
                            </Detail>
                            <Detail label={`סה"כ אשראי ומזומן`}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <AccountBalanceWalletOutlined style={{ height: 31, color: '#0089c0' }} />
                                    <span style={{ color: '#333', fontSize: 16 }}>{(employee.tip.cash + employee.tip.credit).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                                    <span style={{ fontSize: 11, marginTop: -6, color: '#999' }}>סה"כ</span>
                                </div>
                            </Detail>
                        </div>
                    </div>
                </div>
            </Card>
            <Dialog
                open={editOpen}
                TransitionComponent={SlideUpTransition}
                onClose={() => setEditOpen(false)}
            >
                <EmployeeForm onCancel={handleEditClose} employee={employee} onSuccess={handleEditClose} />
            </Dialog>
            <Dialog
                open={deleteOpen}
                TransitionComponent={SlideUpTransition}
                onClose={() => setDeleteOpen(false)}
            >
                <DialogTitle>האם אתה בטוח שברצונך למחוק את {employee.name}?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary">
                        לא
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="secondary">
                        כן
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        margin: theme.spacing(.5, 0),
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
    },
    body: {
        padding: theme.spacing(.5, 1),
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        background: '#fff',
        color: '#333',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #dbdbdb',
    },
    row: {
        display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    fullWidth: {
        width: '100%',
        [theme.breakpoints.down(315)]: {
            width: 'auto'
        }
    },
    spaceItems: {
        justifyContent: 'space-around',
        [theme.breakpoints.down(315)]: {
            flexDirection: 'column',
            width: 'auto'
        }
    },
    primaryText: {
        color: '#0089c0',
        fontWeight: 700
    },
    rowLtr: {
        direction: 'ltr',
        flexDirection: 'row-reverse'
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    spaced: {
        boxSizing: 'border-box',
    }
}))

export default EmployeeItem