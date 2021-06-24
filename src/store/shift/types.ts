
type ShiftType = 'בוקר' | 'ערב'

export interface Wage {
    cash: number
    credit: number
}

export type MapObject<O> = {
    [key in keyof O]: O[key]
}

export interface EmployeePayload {
    name: string
    type?: string
    start: Date
    end: Date
    percent: number
}

export interface Employee extends EmployeePayload {
    hours: number
    tip: Wage
    id: string
}

export interface ShiftPayload {
    type: ShiftType
    date: Date
    tip: Wage
    employees: EmployeePayload[]
}

export interface Shift extends ShiftPayload {
    readonly employees: Employee[]
    readonly perhour: Wage
    readonly hours: number
}

export const SET_SHIFT = 'SET_SHIFT'

export interface SetShift {
    type: typeof SET_SHIFT
    shift: ShiftPayload
}

export const SET_WAGE = 'SET_WAGE'

export interface SetWage {
    type: typeof SET_WAGE
    wage: Wage
}

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'

export interface AddEmployee {
    type: typeof ADD_EMPLOYEE
    employee: EmployeePayload
}

export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE'

export interface UpdateEmployee {
    type: typeof UPDATE_EMPLOYEE
    name: string
    data: EmployeePayload
}

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'

export interface DeleteEmployee {
    type: typeof DELETE_EMPLOYEE
    name: string
}

export type ShiftActions = SetShift | SetWage | AddEmployee | UpdateEmployee | DeleteEmployee