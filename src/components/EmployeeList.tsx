import React from 'react'
import { Container, makeStyles, Theme, IconButton, Dialog } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useAppSelector } from '../store'
import { getShift } from '../store/shift/actions'
import EmployeeForm from './EmployeeForm'

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
        <div className={classes.root}>
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
                    >
                        <div className={classes.addForm}>
                            <EmployeeForm onCancel={handleAddClose} />
                        </div>
                    </Dialog>
                    {/* <Grow
                        // direction="right"
                        in={add}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Paper elevation={4} className={classes.addFormPaper}>
                            <EmployeeForm onCancel={handleAddClose} />
                        </Paper>
                    </Grow> */}
                </div>
            </Container>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
        flex: 1,
        paddingBottom: theme.mixins.toolbar['minHeight'],
        marginBottom: 20,
        paddingTop: theme.spacing(1),
    },
    container: {
    },
    row: {
        display: 'flex',
        width: '100%',
        position: 'relative'
    },
    addButton: {
        margin: theme.spacing(1, 'auto'),
        border: '1px solid rgba(0,0,0,0.54)'
    },
    addForm: {
        padding: theme.spacing(1, 2)
    }
}))

export default EmployeesList