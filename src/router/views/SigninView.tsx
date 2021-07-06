import React from 'react'

interface State {
    loading: boolean
    error?: string
}

interface Input {
    phone: string
    password: string
}

const SigninView: React.FC = () => {
    const [state, setState] = React.useState<State>({ loading: false })
    const [input, setInput] = React.useState<Input>({
        phone: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

            </form>
        </div>
    )
}

export default SigninView