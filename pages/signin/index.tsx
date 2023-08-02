import { ChangeEvent, useState } from "react"
import Input from "../components/Input"
import Link from "next/link"

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputs = [
        {
            placeholder: 'Email',
            type: 'email',
            event: (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
        },
        {
            placeholder: 'Senha',
            type: 'password',
            event: (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
        }
    ]
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-800 gap-y-12">
            <header>
                <h1 className="text-white text-6xl font-semibold">Login</h1>
            </header>
            <section>
                <form action="" className="w-full flex flex-col items-center justify-center gap-y-4">
                    {inputs.map(input => {
                        return (
                            <Input placeholder={input.placeholder} type={input.type} onChange={input.event} />
                        )
                    })}
                    <button className="bg-purple-900 p-2 rounded-lg text-white text-base font-semibold hover:bg-purple-700 transition-colors" type="submit">Entrar</button>
                    <Link href='/signup'>
                        <button className="text-white underline">Ainda não tem conta? Cadastre-se aqui</button>
                    </Link>
                </form>
            </section>
        </main>
    )
}