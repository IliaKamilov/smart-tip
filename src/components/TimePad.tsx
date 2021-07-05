import { makeStyles, Popover, Theme, Button } from '@material-ui/core'
import { BackspaceOutlined, Done } from '@material-ui/icons'
import React from 'react'
import clsx from 'clsx'

interface TimePadProps {
    value?: string
    onChange?: (value: string[]) => void
    icon?: React.ReactNode
    label?: string
    id?: string
}

interface PadProps {
    value?: string[]
    label?: string
    onConfirm?: (value: string[]) => void
}

const BACKSPACE = 'Backspace'
const CLEAR = 'Delete'
const CONFIRM = 'Enter'

const Pad: React.FC<PadProps> = ({ value: defaultValue, onConfirm, label }) => {
    const classes = useStyles()
    const [value, setValue] = React.useState<string[]>(defaultValue || ['00', '00'])
    const [focus, setFocus] = React.useState<'hour' | 'min'>('hour')
    const [index, setIndex] = React.useState<number>(0)

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
        const padValue = e.currentTarget.value
        const timeIndex = focus === 'hour' ? 0 : 1
        const timeValue = value[timeIndex]

        if (isNaN(Number(padValue))) {
            switch (padValue) {
                case CLEAR:
                    return setValue(['', ''])
                case BACKSPACE:
                    value[timeIndex] = ''
                    return setValue([...value])
                case CONFIRM:
                    return onConfirm?.(value)
            }
            return
        }

        console.log({ timeValue, padValue })
        const padNumber = Number(padValue)

        switch (index) {
            case 0:
                if (padNumber > 2) {
                    setValue([`0${padValue}`, value[1]])
                    setFocus('min')
                    setIndex(2)
                    return
                }

                setIndex(1)
                setValue([padValue, value[1]])
                return;
            case 1:
                if (Number(value[0] + padValue) === 24) {
                    setValue(['00', value[1]])
                    setIndex(2)
                    setFocus('min')
                    return
                }

                if (Number(value[0] + padValue) > 24) return

                setValue([`${value[0]}${padValue}`, value[1]])
                setFocus('min')
                setIndex(2)
                return
            case 2:
                if (padNumber > 5) {
                    setValue([value[0], `0${padValue}`])
                    return
                }
                setValue([value[0], padValue])
                setIndex(3)
                return
            case 3:
                if (Number(`${value[1]}${padValue}`) > 59) {
                    return console.log('error', Number(`${value[1]}${padValue}`))
                }
                setValue([value[0], `${value[1]}${padValue}`])
                onConfirm?.([value[0], `${value[1]}${padValue}`])
                return
            default:
                return;
        }
    }

    const handleClick = (target: 'hour' | 'min') => {
        setFocus(target)
        setIndex(target === 'hour' ? 0 : 2)

        if (target === 'min') {
            if (Number(value[0]) < 10 && value[0].length <= 1) {
                setValue([`0${value[0] || 0}`, value[1]])
            }
        }

        if (target === 'hour') {
            if (Number(value[1]) < 10 && value[1].length <= 1) {
                setValue([value[0], `0${value[1] || 0}`])
            }
        }
    }

    return (
        <div className={classes.pad} style={{ position: 'relative' }}>
            <div className={classes.padRow}>
                <div className={classes.padInput}>
                    <div style={{ direction: 'ltr', display: 'flex' }}>
                        <div onClick={() => handleClick('hour')} style={{ background: focus === 'hour' ? '#efefef' : 'transparent' }}>{value[0]}</div>
                        :
                        <div onClick={() => handleClick('min')} style={{ background: focus === 'min' ? '#efefef' : 'transparent' }}>{value[1]}</div>
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
                                        pad === CLEAR && 'C'
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
    const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget)
    const handleClose = () => setAnchor(null)

    const handleTimeConfirm = (value: string[]) => {
        onChange?.(value)
        handleClose()
    }

    const open = Boolean(anchor)
    const time = value?.split(':') || ['00', '00']

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