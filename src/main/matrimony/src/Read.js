import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead } from "./Bridge"

export const Read=()=>{

    const {key}=useParams()


    const [single,setSingle]=useState({})

    const onRead=async()=>{
        alert (key)
        const tmp=await onSubmitRead(key)
        setSingle(tmp.data)
    }
    useEffect(()=>{
        onRead()
    },[])
    return(
        <>
        <div className="alert alert-primary text-center">
            <h1 className="alert-heading text-center">Your perfect match is here</h1>
            <div className="row justify-content-center">
                <p>{single.userID}</p>
                <p>{single.username}</p>
                <p>{single.gender}</p>
                <p>{single.qualification}</p>
                <p>{single.occupation}</p>
                <p>{single.location}</p>
                <p>{single.height}</p>
                <p>{single.weight}</p>
                <p>{single.fathername}</p>
                <p>{single.mothername}</p>
                <p>{single.siblingscount}</p>
                <p>{single.expectation}</p>

            </div>

        </div>
        
        </>
    )
}