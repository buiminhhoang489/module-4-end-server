import { userModel } from "../models/user.models.js";

export const userController = {
    findMany: async (req, res) =>{
        try{
let {err,data} = await userModel.findMany();
if(err) throw err;
return res.status(200).json({
    message:"Lấy dữ liệu thành công",
    data
});
        }catch(err){
return res.status(500).json({
    message:err
})
        }
    }
}