import { makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { EmployeePayload } from '../store/shift/types'
import NumberPad from './NumberPad'
import TimePad from './TimePad'

interface EmployeeFormProps {
    onCancel?: () => void
    onError?: (error: string) => void
}

const date = new Date()
date.setHours(0, 0, 0, 0)

const EmployeeForm: React.FC<EmployeeFormProps> = () => {
    const now = new Date()
    const classes = useStyles()
    const [input, setInput] = React.useState<EmployeePayload>({
        name: '',
        start: date,
        end: date,
        percent: 100,
        type: 'מלצר'
    })

    const handleChange = <T extends keyof EmployeePayload, V extends EmployeePayload[T]>(target: T, value: V) => {
        setInput({ ...input, [target]: value })
    }

    return (
        <div className={classes.root}>
            <div>
                <input
                    type="text"
                    placeholder="שם עובד"
                    value={input.name}
                    onChange={e => handleChange('name', e.currentTarget.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="תפקיד"
                    value={input.type}
                    onChange={e => handleChange('type', e.currentTarget.value)}
                />
            </div>
            <div>
                <NumberPad
                    max={100}
                    onChange={value => handleChange('percent', value)}
                />
            </div>
            <div>
                <TimePad
                    value={0}
                    onChange={value => handleChange('start', new Date(date.setHours(value)))}
                />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {

    }
}))

export default EmployeeForm