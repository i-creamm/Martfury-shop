import { get ,  } from "../utils/request";
const routerName = 'categories'

export const getCategoryList = async () => {
    const result = await get(`${routerName}`)
    return result;
}