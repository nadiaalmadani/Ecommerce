//for add item to cat
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload:product
    }
}
  //for delete
export const delCart = (product) => {
    return{
        type : "DELETITEM",
        payload:product
    }
}



