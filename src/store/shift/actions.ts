import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EmployeePayload, SET_SHIFT, SET_WAGE, Shift, ShiftActions, ShiftPayload, UPDATE_EMPLOYEE, Wage } from "./types";

export function setShift(shift: Shift): ShiftActions {
    return {
        type: SET_SHIFT,
        shift
    }
}

export function setShiftWage(wage: Wage): ShiftActions {
    return {
        type: SET_WAGE,
        wage
    }
}

export function addEmployee(employee: EmployeePayload): ShiftActions {
    return {
        type: ADD_EMPLOYEE,
        employee
    }
}

export function updateEmployeeByName(name: string, data: EmployeePayload): ShiftActions | undefined {
    return {
        type: UPDATE_EMPLOYEE,
        name,
        data
    }
}

export function deleteEmployeeByName(name: string): ShiftActions {
    return {
        type: DELETE_EMPLOYEE,
        name
    }
}

const selectShift = (state: RootState) => state.shift
export const getShift = createDraftSafeSelector(selectShift, (state: ShiftPayload) => {
    if (state) {
        const shift: Shift = {
            ...state,
            employees: state.employees.map(employee => {
                return {
                    ...employee,
                    get id() {
                        return `W${shift.employees.length}`
                    },
                    get hours() {
                        const start = (this.start.getHours() + (this.start.getMinutes() / 60))
                        const end = this.end.getHours() + (this.end.getMinutes() / 60)
                        const hours = (start > end ? (24 - start) + end : (+this.end - +this.start) / 1000 / 3600) || 0

                        return hours
                    },
                    get tip() {
                        return {
                            cash: shift.perhour.cash * this.hours,
                            credit: shift.perhour.credit * this.hours,
                            get total() {
                                return this.cash + this.credit
                            }
                        }
                    }
                }
            }),
            get hours() {
                return Object.values(this.employees).reduce((h, { hours }) => h + hours, 0)
            },
            get perhour() {
                return {
                    cash: this.hours > 0 ? this.tip.cash / this.hours : 0,
                    credit: this.hours > 0 ? this.tip.credit / this.hours : 0,
                    get total() {
                        return this.cash + this.credit
                    }
                }
            }
        }

        return shift
    }
})