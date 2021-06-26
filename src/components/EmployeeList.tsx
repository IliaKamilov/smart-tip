import { Container, makeStyles, Theme } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { useAppSelector } from '../store'
import { getShift } from '../store/shift/actions'
import { Employee } from '../store/shift/types'
import EmployeeItem from './EmployeeItem'

interface EmployeesListProps {
}

export interface ItemState {
    employee: Employee
    edit?: boolean
    menu?: boolean
    delete?: boolean
    edited?: boolean
    error?: string
}

const EmployeesList: React.FC<EmployeesListProps> = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)
    const [current, setCurrent] = React.useState<ItemState | undefined>()

    if (!shift) return <div>לא קיים רישום</div>

    const handleSetCurrent = (state?: ItemState) => {
        setCurrent(state)
    }

    const { employees } = shift

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                {
                    employees.length === 0 &&
                    <Alert severity="info">להוספת עובדים יש ללחוץ על "הוסף עובד"</Alert>
                }
                {
                    employees.map((employee, i) => (
                        <div key={i}>
                            <EmployeeItem current={current} setCurrent={handleSetCurrent} employee={employee} />
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflowY: 'auto',
        width: '100%',
        flex: 1,
        paddingBottom: theme.mixins.toolbar['minHeight'],
        marginBottom: 20,
        paddingTop: theme.spacing(1),
    },
    container: {
    }
}))

export default EmployeesList