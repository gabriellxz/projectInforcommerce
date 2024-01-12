import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
//import { ProductsDTO } from "../models/product";

export function findAll(page: number, name: string, pageSize = 12, sort = "name") {
    const config : AxiosRequestConfig = {
        baseURL: BASE_URL,
        url: "/products",
        params: {
            page,
            name,
            pageSize,
            sort
        }
    }

    return axios(config)

}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`)
}