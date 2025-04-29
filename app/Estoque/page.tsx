'use client'

import { InsertEstoque, Theme, ATTPrice } from "@/utils/function"
import { PedidoEstoque } from "@/utils/interface"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link"
import { useState } from "react"

export default function Estoque() {
    const [Item, setItem] = useState('')
    const [Mode, setMode] = useState(false)
    const [Att, setAtt] = useState<number>(0)
    const [Gasto, setGasto] = useState<number>(0)
    const [Amount, setAmount] = useState<number>(0)
    const [Estoquefeito, setEstoquefeito] = useState<PedidoEstoque[]>([])
    const [theme, settheme] = useState<"light" | "dark">("light")
    const [editId, setEditId] = useState<number | null>(null)

    return (
        <>
            <header className="dark:bg-[#A966D6] flex items-center justify-between w-full bg-[#88D752] ">
                <button className="cursor-pointer" onClick={(e) => Theme(settheme)}>
                    <FontAwesomeIcon className="text-white text-2xl" icon={theme === "light" ? faMoon : faSun} />
                </button>
                <h1 className="text-2xl ml-24 text-white">AÇAÍ</h1>
                <div className="flex space-x-1">
                    <Link className="" href={'/Requests/'}>
                        <button className="dark:bg-[#88D752] bg-[#A966D6] text-white w-16 rounded-[3px] cursor-pointer hover:bg-[#8a53ae]">Pedidos</button>
                    </Link>
                    <Link className="" href={'/Lucro/'}>
                        <button className="dark:bg-[#88D752] bg-[#A966D6] text-white w-16 rounded-[3px] cursor-pointer hover:bg-[#8a53ae]">Lucros</button>
                    </Link>
                </div>
            </header>
            <main className="dark:bg-linear-to-bl from-[#000000] to-[#474747] w-full h-auto min-h-full flex flex-col items-center">
                {Mode == true ? (
                    <div className="w-full h-full flex justify-center items-center absolute">
                        <form className="dark:shadow-Dark scala flex flex-col justify-center items-center shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-[40%] h-32" onSubmit={(e) => {setMode(false); 
                            if(editId !== null){
                                ATTPrice(editId, Att, setEstoquefeito);
                                setMode(false)
                                setEditId(null)
                            }}}>
                            <label className="block mb-1">Gasto</label>
                            <input type="number" step="0.01" className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Att} onChange={(e) => setAtt(Number(e.target.value))}  />
                            <button type="submit" className="dark:bg-[#7a797a] dark:hover:bg-[#8725c9] cursor-pointer bg-[#88D752] mx-auto text-white w-26 rounded-[3px] hover:bg-[#5f963b]">Pedir</button>
                        </form>
                    </div>
                ) : (
                    <>
                    </>
                )}
                <h1 className="shadow-text text-white text-4xl mt-10">ESTOQUE</h1>
                <div className="dark:shadow-Dark scala shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-[30%] h-76 mb-5">
                    <form className="flex flex-col w-full h-full mt-4 ml-5" onSubmit={(e) => { e.preventDefault(); InsertEstoque(Item, Gasto, Amount, setItem, setGasto, setAmount, setEstoquefeito) }}>
                        <label className="block mb-1">Item</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Item} onChange={(e) => setItem(e.target.value)} />
                        <label className="block mb-1">Gasto</label>
                        <input type="number" step="0.01" className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Gasto} onChange={(e) => setGasto(Number(e.target.value))} />
                        <label className="block mb-1">Quantidade</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Amount} onChange={(e) => setAmount(Number(e.target.value))} />
                        <button className="dark:bg-[#A966D6] dark:hover:bg-[#8725c9] cursor-pointer bg-[#88D752] text-white w-26 rounded-[3px] hover:bg-[#5f963b]">Pedir</button>
                    </form>
                </div>
                <div className="dark:shadow-Dark scala bg-white w-[90%] border-black border h-auto rounded-lg shadow-Page grid grid-cols-4 p-3">
                    {Estoquefeito.length == 0 ? (
                        <p>Sem pedidos</p>
                    ) : (
                        Estoquefeito.map((guardado, index) => (
                            <div key={index} className="scala bg-[#444444] text-white w-64 h-64 rounded-lg flex flex-col p-2 mb-5 shadow-Page2 transition ease-out hover:scale-100 hover:-translate-y-1 duration-200">
                                <h1 className="text-xl">Item</h1>
                                <p>{guardado.item}</p>
                                <h1 className="text-xl">Gasto</h1>
                                <p>{guardado.gasto}</p>
                                <h1 className="text-xl">Quantidade</h1>
                                <p>{guardado.amount}</p>
                                <div className="w-full flex justify-between mt-1">
                                    <button onClick={() => {setMode(true); setEditId(guardado.id)}} className="cursor-pointer">
                                        <FontAwesomeIcon className="text-2xl text-yellow-500 mt-15 hover:text-yellow-700" icon={faPenToSquare}></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </>
    )
}