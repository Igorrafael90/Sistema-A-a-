import { Cadastrado } from "./interface";

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