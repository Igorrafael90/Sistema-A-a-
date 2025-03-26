'use client'

import Image from "next/image";
import { RegisterUser } from "@/utils/function";
import { useState } from "react";
import { Cadastrado } from "@/utils/interface";
import Link from "next/link";

export default function Home() {
  const [Mode, setMode] = useState(true)
  const [User, setUser] = useState('')
  const [Senha, setSenha] = useState('')
  const [Userconf, setUserconf] = useState('')
  const [Senhaconf, setSenhaconf] = useState('')

  return (
    <>
      <header className="w-full bg-[#88D752]">
        <h1 className="text-2xl text-center text-white">FAÇA FICHA</h1>
      </header>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-60 flex justify-between mb-3">
          <button onClick={() => setMode(true)} className={` text-white hover:bg-[#88D752] rounded-[3px] w-[35%]  ${Mode == true ? 'CircleLR' : ''}`}><span className="shadow-text">LOGIN</span></button>
          <button onClick={() => setMode(false)} className={` text-white hover:bg-[#88D752] rounded-[3px] w-[35%] ${Mode == true ? '' : 'CircleLR'}`}><span className="shadow-text">CADASTRO</span></button>
        </div>
        <div className={`shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-60 h-96 ${Mode == true ? 'max-h-64 scalaReverse' : 'scala'}`}>
          {Mode == true ?(
            <form className="flex flex-col w-full h-full mt-4 ml-5" action="">
              <label className="block mb-2">Usuario</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={User} onChange={(e) => setUser(e.target.value)} placeholder="Digite seu Usuario" type="email" />
              <label className="block mb-2">Senha</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED]" value={Senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" type="password" />
              <button className="bg-[#88D752] text-white w-26 rounded-[3px] mx-13 mt-2">LOGAR</button>
            </form>
          ) : (
            <form className="flex flex-col w-full h-full mt-4 ml-5" action="">
              <label className="block mb-2">Usuario</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={User} onChange={(e) => setUser(e.target.value)} placeholder="Digite um Usuario" type="email" required/>
              <label className="block mb-2">Confirme Usuario</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Userconf} onChange={(e) => setUserconf(e.target.value)} placeholder="Confirme o Usuario" type="email" required/>
              <label className="block mb-2">Senha</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite uma senha" type="password" required/>
              <label className="block mb-2">Confirme Senha</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#EFEDED]" value={Senhaconf} onChange={(e) => setSenhaconf(e.target.value)} placeholder="Confirme a senha" type="password" required/>
              <button onClick={(e) => {e.preventDefault();/*Evita recarregamento da página*/ RegisterUser(User,Userconf,Senha,Senhaconf)}} className="bg-[#88D752] w-26 rounded-[3px] text-white mx-13 mt-2">CADASTRAR</button>
            </form>
          )}
        </div>
        <Link href={`/Requests/`}>a</Link>
      </main>
    </>
  );
}