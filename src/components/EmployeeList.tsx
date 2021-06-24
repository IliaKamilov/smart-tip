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
    const shift = useAppSelector(getShift)
    const [current, setCurrent] = React.useState<ItemState | undefined>()

    if (!shift) return <div>לא קיים רישום</div>

    const handleSetCurrent = (state?: ItemState) => {
        setCurrent(state)
    }

    const { employees } = shift

    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 20 }}>
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
        </div>
    )
}

export default EmployeesList