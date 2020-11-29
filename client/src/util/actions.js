export const isAuth = (payload) => {
    return {
        type: "IS_AUTH",
        payload: payload
    }
}

export const isNotAuth = () => {
    return {
        type: "IS_NOT_AUTH"
    }
}