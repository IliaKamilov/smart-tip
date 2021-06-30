import { makeStyles, Theme, AppBar, Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core'
import React from 'react'
import { useAppSelector } from './store'
import { getShift } from './store/shift/actions'
import EmployeesList from './components/EmployeeList'
import SidePanel from './components/SidePanel'
import WageForm from './components/WageForm'
import { CalendarTodayRounded } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const AppBarDate: React.FC<{ value?: Date }> = ({ value }) => {
    const date = value || new Date()
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

    const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
    const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchor(e.currentTarget)
    const handleClose = () => setAnchor(null)

    const open = Boolean(anchor)

    return (
        <Tooltip arrow onClose={handleClose} open={open} disableFocusListener title={`יום ${days[date.getDay()]}, ${date.getDate()} ל${months[date.getMonth()]} ${date.getFullYear()}`}>
            <IconButton
                onClick={handleOpen}
                size="small"
                style={{ margin: '0 11px', position: 'absolute' }}
            >
                <CalendarTodayRounded style={{ width: 35, height: 35, color: '#999' }} />
                <div style={{ position: 'absolute', fontSize: 14, fontWeight: 700, bottom: 7, color: '#999' }}>
                    {date.getDate()}
                </div>
            </IconButton>
        </Tooltip>
    )
}

const App: React.FC = () => {
    const classes = useStyles()
    const shift = useAppSelector(getShift)

    if (!shift) return <div>אין משמרת</div>

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar} disableGutters>
                    <AppBarDate value={shift.date} />
                    <Typography variant="h6" component="h1" style={{ textAlign: 'center', width: '100%', fontWeight: 700, color: '#999' }}>Smart Tip</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <div className={classes.container}>
                <SidePanel />
                <div className={classes.main}>
                    <div style={{ order: 1 }}>
                        <WageForm />
                    </div>
                    <div className={classes.content}>
                        <EmployeesList />
                        <div className={classes.footer}>
                            <div style={{ direction: 'ltr', textAlign: 'center', fontSize: 11, color: '#999' }}>
                                <Link to="/about" style={{ color: '#333', textDecoration: 'none' }}>Smart Tip</Link> beta 1.2
                                <div>
                                    <Link to="/contact" style={{ color: '#333', textDecoration: 'none' }}>Ilia Kamilov</Link> {new Date().getFullYear()} ©
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
    },
    appBar: {
        backgroundColor: '#fff',
        color: theme.palette.getContrastText('#fff'),
        boxShadow: theme.shadows[0],
        borderBottom: '1px solid #eaeaea'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    container: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        background: '#efefef',
        height: `calc(100% - 64px)`,
        [theme.breakpoints.down(600)]: {
            height: `calc(100% - ${theme.mixins.toolbar['minHeight']}px)`
        }
    },
    wage: {
        position: 'relative',
        boxShadow: '1px 1px 3px rgba(0,0,0,.1)',
        zIndex: 100
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        order: 2,
        overflowY: 'scroll'
    },
    item: {
        height: '200px',
    },
    employeeButton: {
        width: '100%',
        border: 0,
        background: 'transparent'
    },
    footer: {
        width: '100%',
        flex: 1,
        display: 'flex',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: theme.spacing(.5, 0)
    }
}))

export default App