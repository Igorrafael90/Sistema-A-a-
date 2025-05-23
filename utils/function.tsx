import { SetStateAction } from "react";
import { Cadastrado, PedidoEstoque, PedidoFeito } from "./interface";

export const RegisterUser = (
    User: string,
    Userconf: string,
    Senha: string,
    Senhaconf: string
): Cadastrado | null => {
    if (!User || !Senha || !Userconf || !Senhaconf) {
        alert('Preencha todos os campos');
        return null;
    }

    if (User !== Userconf) {
        alert("Emails não coincidem");
        return null;
    }

    if (Senha !== Senhaconf) {
        alert("Senhas não coincidem");
        return null;
    }

    if (Senha.length !== 8) {
        alert('A senha precisa ter exatamente 8 caracteres');
        return null;
    }

    if (!User.includes('@')) {
        alert('Email inválido');
        return null;
    }

    const novoUsuario: Cadastrado = {
        user: User.toLowerCase().trim(),
        password: Senha
    }
    alert('usuario cadastrado')
    return novoUsuario
}

export const LoginUser = (
    User: string,
    Senha: string,
) => {
    if (!User || !Senha) {
        alert('Preencha todos os campos');
        return null;
    }
}

export const RequestProduct = (
    Order: string,
    Local: string,
    NameCl: string,
    Price: number,
    setPedidosFeitos: React.Dispatch<React.SetStateAction<PedidoFeito[]>>,
    setOrder: React.Dispatch<React.SetStateAction<string>>,
    setLocal: React.Dispatch<React.SetStateAction<string>>,
    setNameCl: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<number>>
) => {
        const novoPedido: PedidoFeito = {
            pedido: Order,
            endereco: Local,
            cliente: NameCl,
            preco: Price
        }

        setPedidosFeitos(prev => [...prev, novoPedido])

        setOrder('')
        setLocal('')
        setNameCl('')
        setPrice(0.0)
    }

export const Theme = (
    settheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
) => {
    const Dark = document.documentElement.classList.contains("dark");

    if (Dark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        settheme("light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        settheme("dark");
    }
};

export const InsertEstoque = (
    Item: string,
    Gasto: number,
    Amount: number,
    setItem: React.Dispatch<React.SetStateAction<string>>,
    setGasto: React.Dispatch<React.SetStateAction<number>>,
    setAmount: React.Dispatch<React.SetStateAction<number>>,
    setEstoquefeito: React.Dispatch<React.SetStateAction<PedidoEstoque[]>>
) => {
    
    const novopedidoestoque: PedidoEstoque ={
        item: Item,
        gasto: Gasto,
        amount: Amount,
        id: Date.now()
    }
    
    setEstoquefeito(prev => [...prev, novopedidoestoque])

    setItem('')
    setGasto(0)
    setAmount(0)
}

export const ATTPrice = (
    id:number,
    Att: number,
    setEstoquefeito: React.Dispatch<React.SetStateAction<PedidoEstoque[]>>
) => {
    setEstoquefeito((prev) => 
    prev.map((item) => 
        item.id === id ? { ...item, gasto: Att} : item))

}

