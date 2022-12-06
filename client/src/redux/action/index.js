export const addCart=(product) => {
    return{
        type:"ADDITEM",
        payload:product
    }
}

export const detCart =(product)=> {
    return{
        type:"DELITEM",
        payload:product
    }
}