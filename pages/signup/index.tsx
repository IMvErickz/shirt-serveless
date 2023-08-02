import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { Toast } from "../components/Toast";

export default function SignUp() {

    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputs = [
        {
            placeholder: 'Nome',
            event: (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value),
            type: 'text'
        },
        {
            placeholder: 'Email',
            event: (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
            type: 'email'
        },
        {
            placeholder: 'Senha',
            event: (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value),
            type: 'password'
        },
    ]

    const [handlRegister, setHandleRegister] = useState(false)

    const toast = <Toast message="Sucesso" error={handlRegister} description="Cadastro Realizado com sucesso!" />

    async function handleUser(event: FormEvent) {
        event.preventDefault()

        try {
            await axios.post('/api/user', {
                Name,
                email,
                password
            })
            setHandleRegister(true)
            setTimeout(() => {
                setHandleRegister(false)
                window.location.href = '/'
            }, 3000)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-800 gap-y-12">
            <header>
                <h1 className="text-white text-6xl font-semibold leading-loose">Cadastro</h1>
            </header>
            <section className="w-full flex flex-col items-center justify-center gap-y-4">
                <form onSubmit={handleUser} className="w-full flex flex-col items-center justify-center gap-y-4">
                    {inputs.map(input => {
                        return (
                            <Input type={input.type} placeholder={input.placeholder} onChange={input.event} />
                        )
                    })}
                    <button type="submit" className="bg-purple-950 p-2 rounded-lg text-white text-xl font-semibold hover:bg-purple-700 transition-colors">Cadastrar</button>
                </form>
            </section>
            {toast}
        </main>
    )
}