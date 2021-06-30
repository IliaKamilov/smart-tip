import { makeStyles, Popover, Theme, Button } from '@material-ui/core'
import { BackspaceOutlined, Done } from '@material-ui/icons'
import React from 'react'
import clsx from 'clsx'

interface TimePadProps {
    value?: string
    onChange?: (value: [number, number, number, number]) => void
    icon?: React.ReactNode
    label?: string
    id?: string
}

interface PadProps {
    value?: [string, string]
    label?: string
    onConfirm?: (value: [string, string]) => void
}

const BACKSPACE = 'Backspace'
const CLEAR = 'Delete'
const CONFIRM = 'Enter'

const Pad: React.FC<PadProps> = ({ value, onConfirm, label }) => {
    const classes = useStyles()
    const [time, setTime] = React.useState<[string, string]>(value || ['00', '00'])
    const [editing, setEditing] = React.useState<'hour' | 'min'>('hour')
    const [focus, setFocus] = React.useState<'hour' | 'min' | undefined>(undefined)

    const pad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [CLEAR, 0, CONFIRM]
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
        if (e.currentTarget.value === BACKSPACE) {
            if (time[1]) {
                setEditing('min')
                time[1] = time[1].slice(0, -1)
            } else {
                setEditing('hour')
                time[0] = time[0].slice(0, -1)
            }
            return setTime([time[0], time[1]])
        }
        if (editing === 'hour') {
            if (e.currentTarget.value === BACKSPACE) return setTime([time[0].slice(0, -1), time[1]])
            if (e.currentTarget.value === CLEAR) return setTime(['', time[1]])
            if (e.currentTarget.value === CONFIRM) {
                if (time[0] === '') {
                    setTime(['00', time[1] || '00'])
                    return onConfirm?.(['00', time[1] || '00'])
                }
                setTime([time[0].length === 1 ? `0${time[0]}` : time[0], time[1].length === 1 ? `0${time[1]}` : time[1]])
                return setEditing('min')
            }
            let value = Number(e.currentTarget.value)
            let currentValue = Number(time[0])
            let newValue = Number(`${currentValue}${value}`)

            if (focus === 'hour') {
                setFocus(undefined)
                if (value > 2) {
                    setEditing('min')
                    return setTime([`0${value.toString()}`, time[1]])
                }
                return setTime([value.toString(), time[1]])
            } else {
                if (newValue === 24) {
                    setEditing('min')
                    return setTime(['00', time[1]])
                }

                if (newValue > 24) {
                    if (value <= 2) {
                        return setTime([value.toString(), time[1]])
                    }

                    if (value > 2 && !focus) {
                        setEditing('min')
                        return setTime([value < 10 ? `0${value.toString()}` : value.toString(), time[1]])
                    }

                    if (value > 2) return console.log('asd')
                }

                if (currentValue === 0 && value >= 3) {
                    setEditing('min')
                    return setTime([`0${value}`, time[1]])
                }

                if (value === 0 && time[0] === '0') {
                    setEditing('min')
                    return setTime([`0${newValue.toString()}`, time[1]])
                }

                if (newValue > 9) {
                    setEditing('min')
                }
                setTime([newValue.toString(), time[1]])
            }
        }
        if (editing === 'min') {
            if (e.currentTarget.value === BACKSPACE) {
                if (time[1] === '') setEditing('hour')
                return setTime([time[0], time[1].slice(0, -1)])
            }
            if (e.currentTarget.value === CLEAR) return setTime([time[0], ''])
            if (e.currentTarget.value === CONFIRM) {
                time[0] = time[0] || '0'
                time[1] = time[1] || '0'
                setTime([time[0].length === 1 ? `0${time[0]}` : time[0], time[1].length === 1 ? `0${time[1]}` : time[1]])
                return onConfirm?.([time[0].length === 1 ? `0${time[0]}` : time[0], time[1].length === 1 ? `0${time[1]}` : time[1]])
            }
            let value = Number(e.currentTarget.value)
            let currentValue = Number(time[1])
            let newValue = Number(`${currentValue}${value}`)

            if (newValue >= 60) {
                return setTime([time[0], `0${value.toString()}`])
            }

            setTime([time[0], newValue.toString()])

            if (newValue.toString().length === 2) {
                onConfirm?.([time[0], newValue.toString()])
            }
        }
    }

    const handleClick = (target: 'hour' | 'min') => {
        setFocus(target)
        setEditing(target)
        setTime([time[0].length === 1 ? `0${time[0]}` : time[0], time[1].length === 1 ? `0${time[1]}` : time[1]])
    }

    return (
        <div className={classes.pad} style={{ position: 'relative' }}>
            <div className={classes.padRow}>
                <div className={classes.padInput}>
                    <div style={{ direction: 'ltr', display: 'flex' }}>
                        <div onClick={() => handleClick('hour')} style={{ background: editing === 'hour' ? '#efefef' : 'transparent' }}>{time[0]}</div>
                        :
                        <div onClick={() => handleClick('min')} style={{ background: editing === 'min' ? '#efefef' : 'transparent' }}>{time[1]}</div>
                    </div>
                    <div className={classes.padLabel}>{label}</div>
                </div>
                <button id={BACKSPACE} className={clsx(classes.padItem, classes.backspaceButton)} value={BACKSPACE} onClick={handlePadClick}>
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

const TimePad: React.FC<TimePadProps> = ({ value, onChange, icon, label, id }) => {
    const classes = useStyles()
    const [time, setTime] = React.useState<[string, string]>(value?.split(':') as [string, string] || ['00', '00'])
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget)
    const handleClose = () => setAnchor(null)

    const handleTimeConfirm = (value: [string, string]) => {
        setTime(value)
        handleChange(value)
        handleClose()
    }

    const handleChange = (value?: [string, string]) => {
        const t = value ? value.map(str => Number(str)) : [Number(time[0]), Number(time[1])]
        const hours: [number, number, number, number] = [t[0], t[1], 0, 0]
        onChange?.(hours)
    }

    const open = Boolean(anchor)

    return (
        <div className={classes.root}>
            <Button
                className={classes.input}
                onClick={handleOpen}
                style={{ fontSize: 18 }}
                id={id}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {icon}
                    <div>{time[0]}:{time[1]}</div>
                    {label && <span className={classes.label}>{label}</span>}
                </div>
            </Button>
            <Popover
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
            >
                <Pad label={label} value={time} onConfirm={handleTimeConfirm} />
            </Popover>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {

    },
    input: {

    },
    pad: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #efefef',
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
    },
    label: {
        color: '#999',
        fontSize: 11
    },
    padLabel: {
        position: 'absolute',
        color: '#999',
        fontSize: 12,
        bottom: 2
    }
}))

export default TimePad