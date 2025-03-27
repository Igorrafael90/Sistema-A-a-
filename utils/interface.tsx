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
    item: string,
    gasto: number,
    amount: number,
}

export interface AcSo{
    id: number,
    nome: string,
    preço: number,
}

export const Description: AcSo[] = [
    {
        id: 1,
        nome: 'Açaí 200ml',
        preço: 1.70
    },
    {
        id: 2,
        nome: 'Açaí 400ml',
        preço: 2.70
    },
    {
        id: 3,
        nome: 'Sorvete',
        preço: 2.00
    },
    {
        id: 4,
        nome: 'Açaí no copo',
        preço: 1.50
    },
]