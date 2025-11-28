import { get , post, del } from "../utils/request";
const routerName = 'products'

//api for client
export const getProductList = async () => {
    const result = await get(`${routerName}`)
    return result;
}

export const getProductBestSeller = async () => {
    const result = await get(`${routerName}/bestseller`)
    return result;
}

export const getProductLatest = async () => {
    const result = await get(`${routerName}/latest`)
    return result;
}

export const getProductRated = async () => {
    const result = await get(`${routerName}/rated`)
    return result;
}

export const getProductSuggest = async (categoryId, productId) => {
    const result = await get(`${routerName}/rated/${categoryId}/${productId}`)
    return result;
}

export const getProductByCategory = async (id) => {
    const result = await get(`${routerName}/category/${id}`)
    return result;
}

//api for admin
export const getProductBestSellerAdmin = async () => {
    const result = await get(`${routerName}/bestseller-admin`)
    return result;
}

export const postProduct = async (options) => {
    const result = await post(`${routerName}`, options)
    return result;
}

export const deleteProduct = async (id) => {
    const result = await del(`${routerName}/${id}`)
    return result;
}

