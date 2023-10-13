import * as cartRepository from "../localstorage/cart-repository"
import { OrderDTO } from "../models/order";

export function saveCart(cart: OrderDTO){
    cartRepository.save(cart)
}