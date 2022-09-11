
export const createError=(status,message,response)=>{
    const err=new Error();
    err.status=status|| 500;
    err.message=message|| "message went wrong";
    return response.send({
        status,
        message
    })

}