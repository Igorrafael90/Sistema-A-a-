'use client'

import { InsertEstoque, Theme } from "@/utils/function"
import { PedidoEstoque } from "@/utils/interface"
import { useState } from "react"

export default function Estoque() {
    const [Item, setItem] = useState('')
    const [Gasto, setGasto] = useState<number>(0)
    const [Amount, setAmount] = useState<number>(0)
    const [Estoquefeito, setEstoquefeito] = useState<PedidoEstoque[]>([])
    const [theme, settheme] = useState<"light" | "dark">("light")
    return (
        <>
            <header className="flex justify-between w-full bg-[#88D752] ">
                <p></p>
                <h1 className="text-2xl text-center text-white">FAÇA FICHA</h1>
                <button onClick={(e) => Theme(settheme)}>a</button>
            </header>
            <main className="dark:bg-linear-to-bl from-[#000000] to-[#474747] w-full h-full flex flex-col items-center">
                <h1 className="shadow-text text-white text-4xl mt-10">ESTOQUE</h1>
                <div className="scala shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-[30%] h-76 mb-5">
                    <form className="flex flex-col w-full h-full mt-4 ml-5" onSubmit={(e) =>{e.preventDefault(); InsertEstoque(Item, Gasto, Amount, setItem, setGasto, setAmount, setEstoquefeito)}}>
                        <label className="block mb-1">Item</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Item} onChange={(e) => setItem(e.target.value)} />
                        <label className="block mb-1">Gasto</label>
                        <input type="number" step="0.01" className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Gasto} onChange={(e) => setGasto(Number(e.target.value))} />
                        <label className="block mb-1">Quantidade</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Amount} onChange={(e) => setAmount(Number(e.target.value))} />
                        <button className="bg-[#88D752] mx-auto text-white w-26 rounded-[3px]">Pedir</button>
                    </form>
                </div>
                <div className="scala bg-white w-[90%] border-black border h-auto rounded-lg shadow-Page grid grid-cols-3 p-3">
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
                            </div>
                        ))
                    )}
                </div>
            </main>
        </>
    )
}