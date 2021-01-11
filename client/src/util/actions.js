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

export const addRoute = (payload) => {
    return {
        type: "ADD_ROUTE",
        payload: payload
    }
}

export const removeRoute = () => {
    return {
        type: "REMOVE_ROUTE"
    }
}