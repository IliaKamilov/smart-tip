import React from 'react'
import { Paper, makeStyles, Typography, Theme, Button } from '@material-ui/core'
import { Employee, EmployeePayload } from '../store/shift/types'
import EmployeeForm from './EmployeeForm'
import clsx from 'clsx'
import { Delete, Edit } from '@material-ui/icons'
import { ItemState } from './EmployeeList'
import { useAppDispatch } from '../store'
import { deleteEmployeeByName } from '../store/shift/actions'

interface EmployeeItemProps {
    employee: Employee
    current?: ItemState
    setCurrent?: (state?: ItemState) => void
}

const leadZero = (n: number): number | string => n < 10 ? `0${n}` : n

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee, current, setCurrent }) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const isCurrent = current && current.employee.name === employee.name

    const edit = isCurrent && current?.edit

    const menu = isCurrent && current?.menu

    const isDelete = isCurrent && current?.delete

    const error = isCurrent && current?.error

    const handleSetCurrent = () => {
        if (isCurrent) return setCurrent?.(undefined)

        if (!isCurrent && current?.edited) {
            return console.log('cant close!')
        }

        setCurrent?.({ employee, menu: true })
    }

    const handleOpenEdit = () => {
        if (isCurrent) {
            setCurrent?.({ employee, edit: true })
        }
    }

    const validateEdited = (data?: EmployeePayload) => {
        setCurrent?.(undefined)
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isCurrent && !isDelete) return setCurrent?.({ employee, delete: true })

        if (isCurrent && isDelete) {
            dispatch(deleteEmployeeByName(employee.name))
            return setCurrent?.(undefined)
        }
    }

    const handleError = (error?: string) => {
        console.log(error)
        setCurrent?.({ employee, edit: true, error })
    }

    return (
        <div className={classes.root} style={{ userSelect: 'none' }}>
            {
                isCurrent && <div className={classes.outer} onClick={handleSetCurrent} />
            }
            <Paper variant="outlined" style={{ padding: 8, margin: '8px 0', zIndex: 1299 }} className={classes.paper}>
                {
                    edit &&
                    <EmployeeForm employee={employee} confirmText="שמור" onConfirm={validateEdited} onCancel={handleSetCurrent} />
                }
                {
                    !edit &&
                    <>
                        <div className={clsx(classes.menu, menu && classes.menuOpen, isDelete && classes.deleteMenu)}>
                            {
                                !isDelete &&
                                <Button
                                    onClick={handleOpenEdit}
                                    disableElevation
                                    variant="contained"
                                    color="primary"
                                    className={classes.menuButton}
                                >
                                    <div>
                                        <Edit />
                                        ערוך
                                    </div>
                                </Button>
                            }
                            <Button
                                disableElevation
                                variant="contained"
                                color="secondary"
                                className={clsx(classes.menuButton, isDelete && classes.deleteButtonFull)}
                                onClick={handleDelete}
                            >
                                <div>
                                    {
                                        isDelete
                                            ? <Delete />
                                            : <>
                                                <Delete />
                                                מחק
                                            </>
                                    }
                                </div>
                            </Button>
                        </div>
                        <div onClick={handleSetCurrent} className={clsx(classes.content, menu && classes.contentOpen)}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
                                <Typography variant="h6" component="h3">{employee.name}</Typography>
                                <Typography style={{ margin: '0 8px', color: '#333' }} variant="caption">({employee.type} <span style={{ color: '#0089c0' }}>{employee.percent}%</span>)</Typography>
                                <Typography variant="caption" component="h3" style={{ color: '#333' }}>
                                    (<span style={{ color: '#0089c0' }}>{employee.hours.toFixed(2)}ש</span>) {leadZero(employee.start.getHours())}:{leadZero(employee.start.getMinutes())}-{leadZero(employee.end.getHours())}:{leadZero(employee.end.getMinutes())}
                                </Typography>
                                {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
                                </div> */}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center', color: '#0089c0' }}>
                                <div>
                                    <Typography variant="subtitle2" style={{ color: '#333' }}>מזומן</Typography>
                                    {employee.tip.cash.toFixed(2)}
                                </div>
                                <div>
                                    <Typography variant="subtitle2" style={{ color: '#333' }}>אשראי</Typography>
                                    {employee.tip.credit.toFixed(2)}
                                </div>
                                <div>
                                    <Typography variant="subtitle2" style={{ color: '#333' }}>סה"כ</Typography>
                                    {(employee.tip.cash + employee.tip.credit).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </Paper>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    outer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1299
    },
    paper: {
        width: '100%',
        height: 'auto',
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        zIndex: 1300
    },
    content: {
        position: 'relative',
        width: '100%',
        right: 0,
        transition: theme.transitions.create(['right'])
    },
    contentOpen: {
        right: 150
    },
    menu: {
        position: 'absolute',
        width: 150,
        height: '100%',
        right: -150,
        transition: theme.transitions.create(['right', 'left', 'width'], {
            duration: 100
        }),
        top: 0,
        display: 'flex'
    },
    menuOpen: {
        right: 0,
    },
    deleteMenu: {
        width: '100%',
        right: 0
    },
    menuButton: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        fontWeight: 'bold',
        transition: theme.transitions.create(['width', 'fontSize'])
    },
    deleteButtonFull: {
        width: '100%',
        display: 'flex',
        zIndex: 1300,
        fontSize: 14,
    }
}))

export default EmployeeItem