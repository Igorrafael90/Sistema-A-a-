'use client'
import { useState } from "react"
import { AcSo, Description, PedidoFeito } from "@/utils/interface"
import { RequestProduct, Theme } from "@/utils/function"

export default function Requests() {
    const [Order, setOrder] = useState('')
    const [Local, setLocal] = useState('')
    const [NameCl, setNameCl] = useState('')
    const [theme, settheme] = useState<"light" | "dark">("light")
    const [PedidosFeitos, setPedidosFeitos] = useState<PedidoFeito[]>([])

    return (
        <>
            <header className="flex justify-between w-full bg-[#88D752] ">
                <p></p>
                <h1 className="text-2xl text-center text-white">FAÇA FICHA</h1>
                <button onClick={(e) => Theme(settheme)}>a</button>
            </header>
            <main className="dark:bg-linear-to-bl from-[#000000] to-[#474747] w-full h-auto min-h-full flex flex-col items-center">
                <h1 className="shadow-text text-white text-4xl mt-10">PEDIDOS</h1>
                <div className="scala shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-[30%] h-76 mb-5">
                    <form className="flex flex-col w-full h-full mt-4 ml-5" onSubmit={(e) =>{e.preventDefault(); RequestProduct(Order, Local, NameCl, setPedidosFeitos, setOrder, setLocal, setNameCl)}}>
                        <label className="block mb-1">Pedido</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Order} onChange={(e) => setOrder(e.target.value)} list="Pedidos" />
                        <datalist id="Pedidos">
                            {Description.map((item) => (
                                <option key={item.id} value={item.nome}></option>
                            ))}
                        </datalist>
                        <label className="block mb-1">Endereço</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Local} onChange={(e) => setLocal(e.target.value)} />
                        <label className="block mb-1">Cliente</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={NameCl} onChange={(e) => setNameCl(e.target.value)} />
                        <button className="bg-[#88D752] text-white w-26 rounded-[3px] mx-auto">Pedir</button>
                    </form>
                </div>

                <div className="scala bg-white w-[90%] border-black border h-auto rounded-lg shadow-Page grid grid-cols-3 p-3">
                    {PedidosFeitos.length == 0 ? (
                        <p>Sem pedidos</p>
                    ) : (
                        PedidosFeitos.map((pedido, index) => (
                            <div key={index} className="scala bg-[#444444] text-white w-64 h-64 rounded-lg flex flex-col p-2 mb-5 shadow-Page2 transition ease-out hover:scale-100 hover:-translate-y-1 duration-200">
                                <h1 className="text-xl">Pedido</h1>
                                <p>{pedido.pedido}</p>
                                <h1 className="text-xl">Preço</h1>
                                <p>{pedido.preco}</p>
                                <h1 className="text-xl">Cliente</h1>
                                <p>{pedido.cliente}</p>
                                <h1 className="text-xl">Endereço</h1>
                                <p >{pedido.endereco}</p>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </>
    )
}