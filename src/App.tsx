import { makeStyles, Theme, AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import React from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { getShift, setShiftWage } from './store/shift/actions'
import MainAddEmployee from './components/MainAddEmployee'
import EmployeesList from './components/EmployeeList'
import SidePanel from './components/SidePanel'
import WageForm from './components/WageForm'

const App: React.FC = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)

    if (!shift) return <div>אין משמרת</div>

    const printDate = (date: Date) => {
        const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
        const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']

        return `יום ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" component="h1">{printDate(shift.date)}</Typography>
                    {/* <Typography variant="h6" component="h1">{shift.type}</Typography> */}
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <SidePanel />
                <div className={classes.main}>
                    <WageForm />
                    <EmployeesList />
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    appBar: {
        backgroundColor: '#fff',
        color: theme.palette.getContrastText('#fff'),
        boxShadow: theme.shadows[1]
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#efefef'
    },
    wage: {
        position: 'relative',
        boxShadow: '1px 1px 3px rgba(0,0,0,.1)',
        zIndex: 100
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        width: '100%',
    },
    content: {
    },
    item: {
        height: '200px',
    },
    employeeButton: {
        width: '100%',
        border: 0,
        background: 'transparent'
    }
}))

export default App