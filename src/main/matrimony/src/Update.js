import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead, onSubmitUpdate } from "./Bridge"

export const Update=()=>{
    
    const {primary}=useParams()

    const[pack,setPack]=useState({})

    const onRead=async()=>{
        const tmp=await onSubmitRead(primary)
        setPack(tmp.data)
    }

    useEffect(()=>{
        onRead()
    },[])

    const gather=(eve)=>{
        const{name,value}=eve.target
        setPack((old)=>{
            return{
                ...old,
                [name]:value
            }
        })

    }

    const onUpdate=async()=>{
        const tmp=await onSubmitUpdate(pack)
        alert(JSON.stringify(tmp.data))
    }
    const onCancel=()=>{
        setPack(()=>{
            return{
                "username":"",
                "gender":"",
                "qualification":"",
                "occupation":"",
                "location":"",
                "height":0.0,
                "weight":0.0,
                "fathername":"",
                "mothername":"",
                "siblingscount":0,
                "expectation":""
            }
        })
    }
    return(
        <>
        <div className="container mt-5">
        <h1 className="text-center text-warning">Upadate Your Profile</h1>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12 shadow p-4" style={{backgroundColor:'rgb(227, 227, 227)'}}>
                    <div className="row">
                        <label>My Name</label>
                        <input name="username" onChange={gather} value={pack.username} type="text"  placeholder="Myname" className="form-control"/>
                    </div>
                    <div className="row">
                        <label>Gender</label>
                        <input name="gender" onChange={gather} value={pack.gender} type="text" placeholder="Gender" className="form-control"/>
                    </div>
                    <div className="row">
                        <label>Qualification</label>
                        <input name="qualification" onChange={gather} value={pack.qualification} type="text" placeholder="Qualification" className="form-control"/>
                    </div>
                    <div className="row">
                        <label>Occupation</label>
                        <input name="occupation" onChange={gather} value={pack.occupation} type="text" placeholder="Occupation" className="form-control"/>
                    </div>
                    <div className="row">
                        <label>Location</label>
                        <input name="location" onChange={gather} value={pack.location} type="text" placeholder="Location" className="form-control"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <label>My Height</label>
                            <input name="height" onChange={gather} value={pack.height} type="text" placeholder="My Height" className="form-control"/>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <label>My Weight</label>
                            <input name="weight" onChange={gather} value={pack.weight} type="text" placeholder="My Weight" className="form-control"/>
                        </div>
                        <div className="row">
                            <label>Father Name</label>
                            <input name="fathername" onChange={gather} value={pack.fathername} type="text" placeholder="Father Name" className="form-control"/>
                        </div>
                        <div className="row">
                            <label>Mother Name</label>
                            <input name="mothername" onChange={gather} value={pack.mothername} type="text" placeholder="Mother Name" className="form-control"/>
                        </div>
                        <div className="row">
                            <label>Siblings Count</label>
                            <input name="siblingscount" onChange={gather} value={pack.siblingscount} type="text" placeholder="Siblings Count" className="form-control"/>
                        </div>
                        <div className="row">
                            <label>Expectation</label>
                            <input name="expectation" onChange={gather} value={pack.expectation} type="text" placeholder="Expectation" className="form-control"/>
                        </div>
                        <div className="row mt-3 justify-content-around">
                            <button className="btn btn-outline-dark col-1" onClick={onUpdate}>
                            <i class="bi bi-chevron-double-up"></i>
                            </button>
                            <button className="btn btn-outline-dark col-1" onClick={onCancel}>
                            <i class="bi bi-arrow-return-left"></i>
                            </button>
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>
        
        </>
    )
}