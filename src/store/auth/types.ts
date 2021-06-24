import { Action } from "redux";

export interface AuthUser {
    username: string
    avatar: string
    phone: string
    firstname: string
    lastname: string
}

export interface AuthState {
    loading: boolean
    error?: string
    user?: AuthUser
    token?: string
}

export const SET_AUTH = 'SET_AUTH'

export interface SetAuth extends Action<typeof SET_AUTH> {
    payload: AuthState
}

export const UNSET_AUTH = 'UNSET_AUTH'

export type UnsetAuth = Action<typeof UNSET_AUTH>

export const SET_AUTH_LOADING = 'SET_AUTH_LOADING'

export interface SetAuthLoading extends Action<typeof SET_AUTH_LOADING> {
    payload: boolean
}

export type AuthActions = SetAuth | UnsetAuth | SetAuthLoading