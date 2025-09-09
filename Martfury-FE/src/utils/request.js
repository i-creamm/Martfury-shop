const API_DOMAIN = 'http://localhost:8080/api/'

export const get = async (path) => {
    const res = await fetch(API_DOMAIN + path)
    const result = await res.json()
    return result;
}

export const post = async (path, options = {}) => {
    const res = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
    })
    const result = await res.json()
    return result
}