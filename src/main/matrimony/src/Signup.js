import { useState } from "react"
import { onSubmitSignup } from "./Bridge"

export const Signup=()=>{
     const [user,setUser]=useState({
        "username":"",
        "password":"",
        "mobile":0,
        "email":""
     })
     const gather=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const onSign=async()=>{
        const t = await onSubmitSignup(user)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
    }

    const onReset=()=>{
        setUser(()=>{
            return{
                "username":"",
                "password":"",
                "mobile":0,
                "email":""
            }
        })
    }
    return(
        <>
            <div className="container mt-5">
                <h1 className="text-center text-warning">SignUp to find your Perfect Match!</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12 shadow rounded-5 p-5" style={{backgroundColor:'rgb(227, 227, 64)'}}>
                        <div className="form group">
                            <label className="text-dark">User Name</label>
                            <input type="text" name="username" placeholder="Enter the username" className="form-control" value={user.username} onChange={gather} />
                        </div>
                        <div className="form group">
                            <label className="text-dark">Set password</label>
                            <input type="password" name="password" placeholder="Enter the password" className="form-control" value={user.password} onChange={gather} />
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-sm-12">
                                <label className="text-dark">Contact number</label>
                                <input type="text" name="mobile" placeholder="Enter the mobile" className="form-control" value={user.mobile} onChange={gather} />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label className="text-dark">Email</label>
                                <input type="text" name="email" placeholder="Enter the email" className="form-control" value={user.email} onChange={gather} />
                            </div>
                        </div>
                        <div className="mt-4 row justify-content-around">
                            <button className="col-1 btn btn-success" onClick={onSign}>
                                <i class="bi bi-person-circle"></i>
                            </button>
                            <button className="col-1 btn btn-dark" onClick={onReset}>
                                <i class="bi bi-slash-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}