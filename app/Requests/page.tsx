'use client'
import { useState } from "react"
import { Description, PedidoFeito } from "@/utils/interface"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faCheckCircle, faXmarkCircle  } from "@fortawesome/free-regular-svg-icons";
import { RequestProduct, Theme } from "@/utils/function"
import Link from "next/link"

export default function Requests() {
    const [Order, setOrder] = useState('')
    const [Local, setLocal] = useState('')
    const [NameCl, setNameCl] = useState('')
    const [theme, settheme] = useState<"light" | "dark">("light")
    const [PedidosFeitos, setPedidosFeitos] = useState<PedidoFeito[]>([])

    return (
        <>
            <header className="dark:bg-[#A966D6] flex items-center justify-between w-full bg-[#88D752] ">
                <button className="cursor-pointer" onClick={(e) => Theme(settheme)}>
                    <FontAwesomeIcon className="text-white text-2xl" icon={theme === "light" ? faMoon : faSun} />
                </button>
                <h1 className="text-2xl ml-24 text-white">AÇAÍ</h1>
                <div className="flex space-x-1">
                    <Link className="" href={'/Estoque/'}>
                        <button className="dark:bg-[#88D752] bg-[#A966D6] text-white w-16 rounded-[3px] cursor-pointer hover:bg-[#8a53ae]">Estoque</button>
                    </Link>
                    <Link className="" href={'/Lucro/'}>
                        <button className="dark:bg-[#88D752] bg-[#A966D6] text-white w-16 rounded-[3px] cursor-pointer hover:bg-[#8a53ae]">Lucros</button>
                    </Link>
                </div>
            </header>
            <main className="dark:bg-linear-to-bl from-[#000000] to-[#474747] w-full h-auto min-h-full flex flex-col items-center">
                <h1 className="shadow-text text-white text-4xl mt-10">PEDIDOS</h1>
                <div className="dark:shadow-Dark scala shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-[30%] h-76 mb-5">
                    <form className="flex flex-col w-full h-full mt-4 ml-5" onSubmit={(e) => { e.preventDefault(); RequestProduct(Order, Local, NameCl, setPedidosFeitos, setOrder, setLocal, setNameCl) }}>
                        <label className="block mb-1">Pedido</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Order} onChange={(e) => setOrder(e.target.value)} list="Pedidos" />
                        <datalist id="Pedidos">
                            {Description.map((item) => (
                                <option key={item.id} value={item.nome}></option>
                            ))}
                        </datalist>
                        <label className="block mb-1">Endereço</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Local} onChange={(e) => setLocal(e.target.value)} />
                        <label className="block mb-1">Cliente</label>
                        <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={NameCl} onChange={(e) => setNameCl(e.target.value)} />
                        <button className="dark:bg-[#A966D6] dark:hover:bg-[#8725c9] cursor-pointer bg-[#88D752] text-white w-26 rounded-[3px] hover:bg-[#5f963b]">Pedir</button>
                    </form>
                </div>

                <div className="dark:shadow-Dark scala bg-white w-[90%] border-black border h-auto rounded-lg shadow-Page grid grid-cols-4 p-3">
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
                                <div className="w-full flex justify-between mt-2">
                                    <button className="cursor-pointer">
                                        <FontAwesomeIcon className="text-2xl text-green-500 hover:text-green-700" icon={faCheckCircle}></FontAwesomeIcon>
                                    </button>
                                    <button className="cursor-pointer">
                                        <FontAwesomeIcon className="text-2xl text-red-500 hover:text-red-700" icon={faXmarkCircle}></FontAwesomeIcon>
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