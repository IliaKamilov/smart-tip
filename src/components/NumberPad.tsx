import React from 'react'
import { makeStyles, Theme, Popover } from '@material-ui/core'
import { BackspaceOutlined, Done } from '@material-ui/icons'
import clsx from 'clsx'

interface NumberPadProps {
    value?: number
    label?: string
    onChange?: (value: number) => void
    max?: number
}

interface PadProps {
    value?: number
    onConfirm?: (value: number) => void
    max?: number
}

const BACKSPACE = 'BACKSPACE'
const CLEAR = 'CLEAR'
const CONFIRM = 'CONFIRM'

const Pad: React.FC<PadProps> = ({ value, onConfirm, max }) => {
    const classes = useStyles()
    const [input, setInput] = React.useState<number>(0)

    const pad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [CLEAR, 0, CONFIRM]
    ]

    const handlePadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        max = max || 9999
        switch (e.currentTarget.value) {
            case BACKSPACE:
                return setInput(Number(input.toString().slice(0, -1)))
            case CLEAR:
                return setInput(0)
            case CONFIRM:
                return onConfirm?.(input)
            default:
                if (Number(input + e.currentTarget.value) > max) return setInput(max)

                return setInput(Number(input + e.currentTarget.value))
        }
    }

    return (
        <div className={classes.pad} style={{ position: 'relative' }}>
            <div className={classes.padRow}>
                <div className={classes.padInput}>
                    <div style={{ direction: 'ltr' }}>{input.toLocaleString()}</div>
                    {max && <div className={classes.padMax}>max {max?.toLocaleString()}</div>}
                </div>
                <button className={clsx(classes.padItem, classes.backspaceButton)} value={BACKSPACE} onClick={handlePadClick}>
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
                                >
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

const NumberPad: React.FC<NumberPadProps> = ({ value, onChange, max }) => {
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
            <div
                className={classes.input}
                onClick={handleOpen}
            >
                {input.toLocaleString()}
            </div>
            <Popover
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
            >
                <Pad max={max} value={input} onConfirm={handleConfirm} />
            </Popover>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%'
    },
    input: {
        cursor: 'text',
        width: '100%',
        textAlign: 'center'
    },
    pad: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #efefef',
    },
    padOuter: {
    },
    padRow: {
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
    padItemIcon: {
    },
    padInput: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0, 1),
        flex: 1,
        position: 'relative',
        alignItems: 'flex-end',
        fontSize: 24,
        justifyContent: 'center'
    },
    padMax: {
        position: 'absolute',
        bottom: 2,
        fontSize: 10,
        color: '#999',
    },
    backspaceButton: {
    },
    confirmItem: {
        color: theme.palette.info.main,
        fontSize: 28,
    },
    clearItem: {
    }
}))

export default NumberPad