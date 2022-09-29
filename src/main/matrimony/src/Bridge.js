import axios from "axios"

// const auth="silviya:jessy"
// const sessionStorage.getItem('user')=btoa(auth)

export const onSubmitLogout=async()=>{
    try{
        const t = await axios.get(`/login?logout`)
        sessionStorage.removeItem('user')
        return
    }catch(err){
        alert(err)
    }
}

export const onSubmitLogin=async(object)=>{
    const credentials=object.username+":"+object.password
    const tok=btoa(credentials)
    try{
        const t = await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${tok}`
            }
        })
        if(t.data){
            sessionStorage.setItem("user",tok)
            return;
        }
    }catch(err){
        alert(err)
    }
}


export const onSubmitSignup=async(object)=>{
    try{
        const t = await axios.post(`/api/signup`,object)
        return t
    }catch(err){
        alert(err)
    }
}

export const onSubmitDeleteCondition=async(see)=>{
    try{
        const t=await axios.delete(`/api/delall/${see}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}


export const onSubmitFilter=async(object)=>{
    // alert(JSON.stringify(object))
    try{
        if(object.occupation!==""&&object.location===""&&object.qualification===""&&object.height===0.0){
          const t =await axios.get(`/api/bywork/${object.occupation}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
          })
          
          return t
    }
    else if(object.occupation===""&&object.location!==""&&object.qualification===""&&object.height===0.0){
        //alert("location condition satisfied")
        const t=await axios.get(`/api/byplace/${object.location}`,{
           headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
           } 
        })
        // alert(JSON.stringify(t.data))
        return t
    }
    else if(object.occupation===""&&object.location===""&&object.qualification!==""&&object.height===0.0){
        const t=await axios.get(`/api/bystudy/${object.qualification}`,{
           headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
           } 
        })
        return t
    


}
else if(object.occupation!==""&&object.location===""&&object.qualification===""&&object.height!==0.0){
    const t=await axios.get(`/api/bytwo/${object.occupation}/${object.height}`,{
       headers:{
        "Authorization":`Basic ${sessionStorage.getItem('user')}`
       } 
    })
    return t
}
else{
    return {"err":"Invalid filter call"}
}
}
catch(err){alert(err)}
}

export const onSubmitDelete=async(ref)=>{
    try{
        const t=await axios.delete(`/api/delid/${ref}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitUpdate=async(object)=>{
    try{
        const t=await axios.put(`/api/up`,object,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
        
    }
    catch(err){
        alert(err)
    }

}

export const onSubmitRead=async(id)=>{
    try{
        const t=await axios.get(`/api/${id}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}

export const onSubmitList=async()=>{
    try{
        const t=await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('user')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitCreate=async(obj)=>{
try{
    const t=await axios.post(`/api/new`,obj,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}
catch(err){
    alert(err)
}
}