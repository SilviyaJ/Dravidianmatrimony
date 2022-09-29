import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete, onSubmitList } from "./Bridge"

export const List=()=>{

    const navi=useNavigate()

    const [stocks,setStocks]=useState([])

    const onList=async()=>{
        const tmp=await onSubmitList()
        setStocks(tmp.data)

    }

    useEffect(()=>{
        onList()
    },[])
    return(
        <>
        <div className="container mt-5">
            <h1 className="text-center text-warning">Suitable matches for you</h1>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12 p-5 shadow rounded-5" style={{backgroundColor:'rgb(227, 227, 227)'}}>
                    <div className="table-responsive">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Customer Name</th>
                                    <th>Customer Gender</th>
                                    <th>Customer Qualification</th>
                                    <th>Customer Occupation</th>
                                    <th>Customer Location</th>
                                    <th>Customer Height</th>
                                    <th>Customer Weight</th>
                                    <th>Customer FatherName</th>
                                    <th>Customer MotherName</th>
                                    <th>Customer SiblingsCount</th>
                                    <th>Customer Expectation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stocks.map((obj,pos)=>(
                                        <tr>
                                            <td><a className="btn btn-outline-info" href={`/#/open/${obj.userID}`}> {obj.userID}</a>
                                           </td>
                                            <td>{obj.username}</td>
                                            <td>{obj.gender}</td>
                                            <td>{obj.qualification}</td>
                                            <td>{obj.occupation}</td>
                                            <td>{obj.location}</td>
                                            <td>{obj.height}</td>
                                            <td>{obj.weight}</td>
                                            <td>{obj.fathername}</td>
                                            <td>{obj.mothername}</td>
                                            <td>{obj.siblingscount}</td>
                                            <td>{obj.expectation}</td>
                                            <td>
                                                <a className="btn btn-outline-info" href={`/#/modify/${obj.userID}`}>
                                                <i class="bi bi-box-arrow-up-right"></i>Edit
                                                </a>
                                                <button className="btn btn-outline-danger ms-4" onClick={async()=>{
                                                    const tmp=await onSubmitDelete(obj.userID)
                                                    alert(tmp.data)
                                                    navi("/view")
                                                }}>
                                                    <i class="bi bi-eraser"></i>Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>

                    </div>

                </div>
            

            </div>

        </div>

        
        </>
    )
}