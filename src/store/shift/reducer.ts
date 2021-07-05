import { createReducer } from "@reduxjs/toolkit";
import { EmployeePayload, ShiftPayload } from "./types";

const now = new Date()
const defaultStartDate = new Date(now.setHours(10, 0, 0, 0))
const defaultEndDate = new Date(now.setHours(11, 0, 0, 0))
const employees_mocks: EmployeePayload[] = [
    {
        name: 'מתלמד',
        start: defaultStartDate,
        end: defaultEndDate,
        percent: 0,
        type: 'מתלמד'
    },
    {
        name: 'מלצר',
        start: defaultStartDate,
        end: defaultEndDate,
        percent: 100,
        type: 'מלצר'
    },
    {
        name: 'מלצר 2',
        start: defaultStartDate,
        end: defaultEndDate,
        percent: 100,
        type: 'מלצר'
    },
    {
        name: 'מלצר 3',
        start: defaultStartDate,
        end: defaultEndDate,
        percent: 100,
        type: 'מלצר'
    },
    {
        name: 'מלצר 4',
        start: defaultStartDate,
        end: defaultEndDate,
        percent: 100,
        type: 'מלצר'
    },
]

const initialState: ShiftPayload | null = {
    date: new Date(),
    employees: [], // process.env.NODE_ENV === 'development' ? employees_mocks : [],
    tip: { cash: 0, credit: 0 },
    type: 'בוקר'
}

const shiftReducer = createReducer(
    initialState,
    {
        SET_SHIFT: (state, action) => {
            return state = action
        },
        SET_WAGE: (state, action) => {
            return state = { ...state, tip: action.wage }
        },
        ADD_EMPLOYEE: (state, action) => {
            return state = { ...state, employees: [...state.employees, action.employee] }
        },
        UPDATE_EMPLOYEE: (state, action) => {
            state.employees = state.employees.map(employee => {
                if (employee.name === action.name) {
                    employee = action.data
                }

                return employee
            })
            return state
        },
        DELETE_EMPLOYEE: (state, action) => {
            state.employees = state.employees.filter(employee => employee.name !== action.name)

            return state
        }
    }
)

export default shiftReducer