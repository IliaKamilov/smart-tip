import React from 'react'
import { makeStyles, Theme, Button } from '@material-ui/core'
import EmployeeForm from './EmployeeForm'
import clsx from 'clsx'
import { Alert } from '@material-ui/lab'

const MainAddEmployee: React.FC = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | undefined>()

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setError(undefined)
        setOpen(false)
    }

    const handleError = (e?: string) => setError(e)

    return (
        <div className={clsx(classes.root, open && classes.open, error && classes.openWithError)}>
            <Button
                fullWidth
                onClick={handleOpen}
                disabled={open}
                color="primary"
                className={classes.button}
                variant={open ? 'text' : 'contained'}
                disableElevation
            >
                הוסף עובד
            </Button>
            <div className={clsx(classes.content, open && classes.contentOpen)}>
                {
                    open &&
                    <div className={clsx(classes.content, open && classes.contentOpen)} style={{ position: 'relative' }}>
                        <div onClick={handleClose} style={{ inset: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'fixed' }} />
                        <div style={{ position: 'relative' }}>
                            <EmployeeForm onError={handleError} onConfirm={handleClose} onCancel={handleClose} />
                        </div>
                    </div>
                }
            </div>
            {
                error && <Alert style={{ marginBottom: 8 }} severity="error">{error}</Alert>
            }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        userSelect: 'none'
    },
    open: {
    },
    openWithError: {
    },
    content: {
    },
    contentOpen: {
    },
    button: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: theme.spacing(1, 0)
    }
}))

export default MainAddEmployee