import { useState } from "react"
import { onSubmitFilter } from "./Bridge"
import { Result } from "./Result"

export const Filter=()=>{

    const [result,setResult]=useState(false)
    const [tmpresult,setTmpresult]=useState([])
    
    const[short,setShort]=useState({
        "occupation":"",
        "location":"",
        "qualification":"",
        "height":0.0
    })

    const collect=(eve)=>{
        const{name,value}=eve.target
        setShort((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const doFilter=async()=>{
        const t= await onSubmitFilter(short)
        alert(JSON.stringify(t.data))
        if(t.data){
            if(t.data!=="err"){
                setResult(true)
                setTmpresult(t.data)
            }
            else{
                alert(t.data)
                setResult(false)
            }
        }
        else{
            setResult(false)
        }
    }

    
    return(
        <>
         {
            (result)?
            <>
             <Result show={tmpresult}/>
            </>:
            <>
            <div className="container mt-4">
            <h1 className="text-center display-4 text-warning">Select your suitable matches here</h1>
            <div className="row justify-content-center">
                <div className="col=lg-6 col-md-8 col-12 p-4 shadow rounded-3" style={{backgroundColor:'rgb(227, 227, 227)'}}>
                    <div className="form group">
                        <label className="text-dark">Filter by Occupation</label>
                        <input onChange={collect} value={short.occupation} type="text" name="occupation" placeholder="Occupation to filter" className="form-control"/>
                    </div><br/>
                    <div className="form group">
                        <label className="text-dark">Filter by Location</label>
                        <input onChange={collect} value={short.location} type="text" name="location" placeholder="Location to filter" className="form-control"/>
                    </div><br/>
                    <div className="form group">
                        <label className="text-dark">Filter by Qualification</label>
                        <input onChange={collect} value={short.qualification} type="text" name="qualification" placeholder="Qualification to filter" className="form-control"/>
                    </div>
                    <h1 className="text-center display-5 text-dark">OR</h1>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                              <label className="text-dark">Occupation</label>
                              <input onChange={collect} value={short.occupation} type="text" name="occupation" placeholder="Occupation to filter" className="form-control" />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                              <label className="text-dark">Height</label>
                              <input onChange={collect} value={short.height} type="text" name="height" placeholder="Height to filter" className="form-control" />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                                    <button className="btn btn-success col-1" onClick={doFilter}>
                                    <i class="bi bi-funnel-fill"></i>
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