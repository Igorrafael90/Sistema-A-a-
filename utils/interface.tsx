export interface Cadastrado {
    user: string,
    password: string,
}

export interface ORDERS {
    id: number,
    order: string,
    amount: number,
    local: string,
}

export interface PedidoFeito {
    pedido: string,
    endereco: string,
    cliente: string,
    preco: number,
}

export interface PedidoEstoque {
    id:number;
    item: string,
    gasto: number,
    amount: number,
}

export interface AcSo{
    id: number,
    nome: string,
    preço: number,
}
