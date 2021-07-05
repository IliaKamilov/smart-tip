import React from 'react'
import { Container, makeStyles, Theme, IconButton, Dialog } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useAppSelector } from '../store'
import { getShift } from '../store/shift/actions'
import EmployeeForm from './EmployeeForm'
import EmployeeItem, { SlideUpTransition } from './EmployeeItem'

interface EmployeesListProps {
}

const EmployeesList: React.FC<EmployeesListProps> = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)
    const [add, setAdd] = React.useState<boolean>(false)

    if (!shift) return <div>לא קיים רישום</div>

    const handleAddOpen = () => setAdd(true)
    const handleAddClose = () => setAdd(false)

    return (
        <>
            <Container className={classes.container}>
                <div className={classes.row}>
                    <IconButton
                        className={classes.addButton}
                        onClick={handleAddOpen}
                        disabled={add}
                    >
                        <Add />
                    </IconButton>
                    <Dialog
                        open={add}
                        onClose={handleAddClose}
                        TransitionComponent={SlideUpTransition}
                    >
                        <EmployeeForm onSuccess={handleAddClose} onCancel={handleAddClose} />
                    </Dialog>
                </div>
                {
                    shift.employees.map((employee, i) => <EmployeeItem key={i} employee={employee} />)
                }
            </Container>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'auto',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    row: {
        display: 'flex',
        width: '100%',
        position: 'relative',
        minHeight: 50,
        margin: theme.spacing(.5, 0)
    },
    addButton: {
        margin: theme.spacing(1, 'auto'),
        border: '1px solid rgba(0,0,0,0.54)'
    },
    addForm: {
        // padding: theme.spacing(1, 2)
    }
}))

export default EmployeesList