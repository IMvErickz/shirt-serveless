import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full h-14 flex flex-row items-center justify-center bg-zinc-600 drop-shadow-lg">
            <h1 className="text-white text-2xl">Zilli Shirt</h1>
            <div className="w-full flex items-center justify-end">
                <Link href='/signin'>
                    <button className="bg-cyan-950 p-2 rounded-lg text-white text-xl font-semibold drop-shadow-2xl hover:bg-cyan-700 transition-colors">Login</button>
                </Link>
            </div>
        </header>
    )
}