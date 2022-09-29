import { useState } from "react"
import { onSubmitLogin } from "./Bridge"
import { Signup } from "./Signup"

export const Login=()=>{
    const[signview,setSignview]=useState(false)
    
    const[person,setPerson]=useState({
        "username":"",
        "password":""
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setPerson((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const onLog=async()=>{
        await onSubmitLogin(person)
        window.location.assign("/")
    }

    const onRes=()=>{
        setPerson(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }
return(
    <>
    {
        (signview)?
        <><Signup/></>
        :
        <>
        <div className="container mt-5">
                        <h1 className="text-center text-warning">Welcome to Dravidian Matrimony World</h1><br/>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8 col-sm-12 shadow rounded-5 p-5" style={{backgroundColor:'rgb(227, 227, 227)'}}>
                                <div className="form group">
                                    <label className="text-dark">Username</label>
                                    <input type="text" name="username" value={person.username} onChange={gather} placeholder="Username Please" className="form-control" />
                                </div>
                                <div className="form group">
                                    <label className="text-dark">Password</label>
                                    <input type="password" name="password" value={person.password} onChange={gather} placeholder="Password Please" className="form-control" />
                                </div>
                                <div className="mt-4 row justify-content-around">
                                    <button className="col-2 btn btn-success" onClick={onLog}>
                                        <i class="bi bi-airplane-engines-fill"></i>
                                    </button>
                                    <button className="col-2 btn btn-danger" onClick={onRes}>
                                        <i class="bi bi-arrow-clockwise"></i>
                                    </button>
                                </div>
                                <div className="mt-2 row justify-content-center">
                                <button className=" col-6 btn btn-secondary" onClick={()=>{
                                    setSignview(true)
                                }}>
                                    New USer?
                                    </button>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    </>
    }
                    
                </>
)
}