'use client'

import { Theme } from "@/utils/function"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link"
import { useState } from "react"


export default function Lucro() {
    const [theme, settheme] = useState<"light" | "dark">("light")
    return (
        <>
            <nav className="dark:bg-[#A966D6] flex items-center justify-between w-full bg-[#88D752] ">
                <button className="cursor-pointer" onClick={(e) => Theme(settheme)}>
                    <FontAwesomeIcon className="text-white text-2xl" icon={theme === "light" ? faMoon : faSun} />
                </button>
                <h1 className="text-2xl ml-24 text-white">AÇAÍ</h1>
                <div className="flex space-x-1">
                    <Link className="" href={'/Estoque/'}>
                        <button className="dark:bg-[#88D752] bg-[#A966D6] text-white w-16 rounded-[3px] cursor-pointer hover:bg-[#8a53ae]">Estoque</button>
                    </Link>
                    <Link className="" href={'/Requests/'}>
                        <button className="dark:bg-[#88D752] bg-[#A966D6] text-white w-16 rounded-[3px] cursor-pointer hover:bg-[#8a53ae]">Pedidos</button>
                    </Link>
                </div>
            </nav>
            <main className="dark:bg-linear-to-bl from-[#000000] to-[#474747] w-full h-auto min-h-full flex flex-col items-center">
                <h1 className="shadow-text text-white text-4xl mt-10">LUCROS</h1>
                <div className="dark:shadow-Dark scala shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-[30%] h-76 mb-5">
                    <h1>LUCROS</h1>
                    <h1>GASTOS</h1>
                </div>
            </main>
        </>
    )
}