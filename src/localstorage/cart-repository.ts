import { OrderDTO } from "../models/order";


export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart)
    localStorage.setItem("cartStorage", str)
}

export function get() : OrderDTO {
    const str = localStorage.getItem("cartStorage") || '{"items"=[]}'
    return JSON.parse(str)
}