import { createMuiTheme, jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core'
import { create } from 'jss'
import rtl from 'jss-rtl'

const theme = createMuiTheme({
    direction: 'rtl'
})

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const RTL: React.FC = ({ children }) => {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StylesProvider>
    )
}

export default RTL