'use client'

import Image from "next/image";
import { LoginUser, RegisterUser, Theme } from "@/utils/function";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Home() {
  const [Mode, setMode] = useState(true)
  const [User, setUser] = useState('')
  const [Senha, setSenha] = useState('')
  const [Userconf, setUserconf] = useState('')
  const [Senhaconf, setSenhaconf] = useState('')
  const [theme, settheme] = useState<"light" | "dark">("light")


  return (
    <>
      <header className="dark:bg-[#A966D6] flex justify-between w-full bg-[#88D752] ">
        <button className="cursor-pointer" onClick={(e) => Theme(settheme)}>
          <FontAwesomeIcon className="text-white text-2xl" icon={theme === "light" ? faMoon : faSun} />
        </button>
        <h1 className="text-2xl text-center text-white">AÇAI</h1>
        <p></p>
      </header>
      <main className="dark:bg-linear-to-bl  from-[#000000] to-[#474747] from w-full h-auto min-h-full flex flex-col items-center justify-center">
        <div className="w-60 flex justify-between mb-3">
          <button onClick={() => setMode(true)} className={`dark:bg-[#A966D6] dark:hover:bg-[#8725c9] cursor-pointer text-white hover:bg-[#88D752] bg-[#88D752] rounded-[3px] w-[35%]  ${Mode == true ? 'CircleLR' : ''}`}><span className="shadow-text">LOGIN</span></button>
          <button onClick={() => setMode(false)} className={`dark:bg-[#A966D6] dark:hover:bg-[#8725c9] cursor-pointer text-white hover:bg-[#88D752] bg-[#88D752] rounded-[3px] w-[35%] ${Mode == true ? '' : 'CircleLR'}`}><span className="shadow-text">CADASTRO</span></button>
        </div>
        <div className={`dark:shadow-Dark shadow-Page border-black border-[1px] bg-[#FFFFFF] text-black rounded-[8px] w-60 h-96 ${Mode == true ? 'max-h-64 scalaReverse' : 'scala'}`}>
          {Mode == true ? (
            <form className="flex flex-col w-full h-full mt-4 ml-5" action="">
              <label className="block mb-2">Usuario</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={User} onChange={(e) => setUser(e.target.value)} placeholder="Digite seu Usuario" type="email" />
              <label className="block mb-2">Senha</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8]" value={Senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" type="password" />
              <button onClick={(e) => {e.preventDefault(); LoginUser(User,Senha)}} className="dark:bg-[#A966D6] dark:hover:bg-[#8725c9] bg-[#88D752] text-white w-26 rounded-[3px] mx-13 mt-2 cursor-pointer hover:bg-[#5f963b]">LOGAR</button>
            </form>
          ) : (
            <form className="flex flex-col w-full h-full mt-4 ml-5" action="">
              <label className="block mb-2">Usuario</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={User} onChange={(e) => setUser(e.target.value)} placeholder="Digite um Usuario" type="email" required />
              <label className="block mb-2">Confirme Usuario</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Userconf} onChange={(e) => setUserconf(e.target.value)} placeholder="Confirme o Usuario" type="email" required />
              <label className="block mb-2">Senha</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8] mb-5" value={Senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite uma senha" type="password" required />
              <label className="block mb-2">Confirme Senha</label>
              <input className="w-[85%] h-8 rounded-[3px] bg-[#d8d8d8]" value={Senhaconf} onChange={(e) => setSenhaconf(e.target.value)} placeholder="Confirme a senha" type="password" required />
              <button onClick={(e) => { e.preventDefault();/*Evita recarregamento da página*/ RegisterUser(User, Userconf, Senha, Senhaconf) }} className="dark:bg-[#A966D6] dark:hover:bg-[#8725c9] bg-[#88D752] w-26 rounded-[3px] text-white mx-13 mt-2 cursor-pointer hover:bg-[#5f963b]">CADASTRAR</button>
            </form>
          )}
        </div>
        <Link href={`/Requests/`}>a</Link>
        <Link href={`/Estoque/`}>a</Link>
      </main>
    </>
  );
}