import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
}

export default function Input({ placeholder, ...rest }: InputProps) {
    return (
        <input className="bg-zinc-700 w-60 p-2 rounded-lg placeholder:text-zinc-400 text-white outline-none" type="text" placeholder={placeholder} {...rest} />
    )
}