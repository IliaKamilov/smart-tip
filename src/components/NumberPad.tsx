import React from 'react'
import { makeStyles, Theme, Popover, Button } from '@material-ui/core'
import { BackspaceOutlined, CancelRounded, Done } from '@material-ui/icons'
import clsx from 'clsx'

interface NumberPadProps {
    open?: HTMLElement
    value?: number
    label?: string
    icon?: React.ReactNode
    onChange?: (value: number) => void
    max?: number
    id?: string
}

interface PadProps {
    value?: number
    onConfirm?: (value: number) => void
    max?: number
    label?: string
}

const BACKSPACE = 'Backspace'
const CLEAR = 'Delete'
const CONFIRM = 'Enter'

const Pad: React.FC<PadProps> = ({ value, onConfirm, max, label }) => {
    const classes = useStyles()
    const [input, setInput] = React.useState<string>(value?.toString() || '0')

    const pad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['.', 0, CONFIRM]
    ]

    React.useEffect(() => {
        document.addEventListener('keyup', handleKeyUp)

        return () => document.removeEventListener('keyup', handleKeyUp)
    })

    function handleKeyUp(this: Document, ev: KeyboardEvent) {
        const key = isNaN(Number(ev.key)) ? ev.key : Number(ev.key)
        const isValid = Boolean(Array.from(pad, r => r.includes(key)).find(b => b === true)) || [CLEAR, BACKSPACE].includes(key.toString())

        if (isValid) {
            const button = document.getElementById(key.toString())
            button?.click()
        }
    }

    const handlePadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        max = max || 9999
        switch (e.currentTarget.value) {
            case BACKSPACE:
                return setInput(input.toString().slice(0, -1))
            case CLEAR:
                return setInput('0')
            case CONFIRM:
                return onConfirm?.(Number(input))
            case '.':
                if (input.includes('.')) return
                return setInput(`${input}.`)
            default:
                if (Number(input + e.currentTarget.value) > max) return setInput(max.toString())
                if (input === '0') return setInput(e.currentTarget.value)
                return setInput(input + e.currentTarget.value)
        }
    }

    return (
        <div className={classes.pad} style={{ position: 'relative' }}>
            <div className={classes.padRow}>
                <div className={classes.padInput}>
                    <div style={{ direction: 'ltr' }}>{input.toLocaleString()}</div>
                    {label && <div className={classes.padMax}>{label}</div>}
                    {!label && max && <div className={classes.padMax}>max {max?.toLocaleString()}</div>}
                </div>
                {
                    input !== '' && input !== '0' &&
                    <button className={clsx(classes.actionButton)} id={CLEAR} value={CLEAR} onClick={handlePadClick}>
                        <CancelRounded fontSize="inherit" />
                    </button>
                }
                <button className={clsx(classes.actionButton)} id={BACKSPACE} value={BACKSPACE} onClick={handlePadClick}>
                    <BackspaceOutlined fontSize="inherit" />
                </button>
            </div>
            {
                pad.map((row, i) => (
                    <div key={i} className={classes.padRow}>
                        {
                            row.map((pad, i) => (
                                <button
                                    key={i}
                                    className={clsx(classes.padItem, pad === CONFIRM && classes.confirmItem, pad === CLEAR && classes.clearItem)}
                                    value={pad}
                                    onClick={handlePadClick}
                                    id={pad.toString()}
                                >
                                    {
                                        pad === '.' && '.'
                                    }
                                    {
                                        typeof pad === 'number' && pad.toString()
                                    }
                                    {
                                        pad === CONFIRM && <Done fontSize="inherit" />
                                    }
                                    {
                                        pad === CLEAR && pad[0]
                                    }
                                </button>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

const NumberPad: React.FC<NumberPadProps> = ({ value, onChange, max, label, icon, id }) => {
    const classes = useStyles()
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)
    const [input, setInput] = React.useState<number>(value || 0)

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget)
    const handleClose = () => setAnchor(null)

    const handleConfirm = (value: number) => {
        onChange?.(value)
        setInput(value)
        setAnchor(null)
    }

    const open = Boolean(anchor)

    return (
        <div className={classes.root}>
            <Button
                id={id}
                className={classes.input}
                onClick={handleOpen}
                style={{ fontSize: 18 }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {icon}
                    <div>{input.toLocaleString()}</div>
                    {label && <span className={classes.label}>{label}</span>}
                </div>
            </Button>
            <Popover
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
                <Pad label={label} max={max} value={input} onConfirm={handleConfirm} />
            </Popover>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%'
    },
    input: {
        width: '100%',
        color: 'inherit'
    },
    pad: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #efefef',
        maxWidth: `calc(75px * 3)`
    },
    padOuter: {
    },
    padRow: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row-reverse',
        '&:not(:last-child)': {
            borderBottom: '1px solid #efefef'
        }
    },
    padItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 0,
        boxSizing: 'border-box',
        fontSize: 18,
        background: 'transparent',
        width: 75,
        height: 75,
        outline: 'none',
        '&:not(:last-child)': {
            borderLeft: '1px solid #efefef'
        }
    },
    padIcon: {
        color: 'inherit'
    },
    padInput: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0, 1),
        flex: 1,
        position: 'relative',
        alignItems: 'flex-end',
        fontSize: 24,
        justifyContent: 'center',
        maxWidth: '60%',
        outline: 'none',
        overflow: 'hidden'
    },
    padMax: {
        position: 'absolute',
        bottom: 2,
        fontSize: 10,
        color: '#999',
    },
    actionButton: {
        height: 75,
        border: 0,
        background: 'transparent',
        color: '#999',
        fontSize: 24,
        outline: 'none',
    },
    confirmItem: {
        color: theme.palette.info.main,
        fontSize: 28,
    },
    clearItem: {
    },
    label: {
        color: '#999',
        fontSize: 11
    }
}))

export default NumberPad