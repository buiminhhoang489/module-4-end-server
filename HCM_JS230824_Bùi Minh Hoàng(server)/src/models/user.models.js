import { mysqlDB } from "../mysql"

export const userModel = {
    findMany: async()=>{
try{
return await new Promise((ok,fail)=>{
    let queryStr =`
    SELECT category.*, product.id as productId, product.name, product.price
FROM category
LEFT JOIN product
on product.categoryId * category.id
    `
    
    mysqlDB.query(queryStr,(err, result)=> {
        if(err) ok({
            err:"Lỗi query"
        })
        ok({
            data: result
        })
    })
})
}catch(err){
return{err}
}
    }
}