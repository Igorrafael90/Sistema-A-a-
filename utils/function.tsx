import { Cadastrado, Description, PedidoFeito } from "./interface";

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

export const RequestProduct = (
    e: React.FormEvent,
    Order: string,
    Local: string,
    NameCl: string,
    setPedidosFeitos: React.Dispatch<React.SetStateAction<PedidoFeito[]>>,
    setOrder: React.Dispatch<React.SetStateAction<string>>,
    setLocal: React.Dispatch<React.SetStateAction<string>>,
    setNameCl: React.Dispatch<React.SetStateAction<string>>
) => {
    e.preventDefault()

    const itemSelecionado = Description.find(item => item.nome === Order)

    if(itemSelecionado){
        const novoPedido: PedidoFeito = {
            pedido: Order,
            endereco: Local,
            cliente: NameCl,
            preco: itemSelecionado.preço
        }

        setPedidosFeitos(prev => [...prev, novoPedido])
        
        setOrder('')
        setLocal('')
        setNameCl('')
    }
}

export const Theme = (
    settheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
) => {
    const Dark = document.documentElement.classList.contains("dark");
  
    if (Dark) {
      document.documentElement.classList.remove("dark");
      settheme("light");
    } else {
      document.documentElement.classList.add("dark");
      settheme("dark");
    }
  };
  
  