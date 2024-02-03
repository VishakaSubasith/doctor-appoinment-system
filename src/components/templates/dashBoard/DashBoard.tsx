'use client'
import Header from "@/components/commonComponents/Header";
import exp from "node:constants";
import Table from "@/components/commonComponents/Table";
import Button from "@/components/commonComponents/Button";
import PopUp from "@/components/commonComponents/PopUp";
import {useState} from "react";
import Warning from "@/components/commonComponents/Waning";

const DashBoard =() =>{
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    return (
        <div className="w-screen h-screen">
            <Header/>
            <div className="w-1/5 p-3 pl-40 m-3">
                <Button className="bg-amber-50 text-black" onClick={()=>setOpenPopUp(true)}>Create Appointment</Button>
            </div>
            <div className="mx-40 mt-10">
                <Table setOpenDeletePopUp={setOpenDeletePopUp} />
            </div>
            {
                openPopUp ?  <PopUp setOpenPopUp={setOpenPopUp} isEdit={isEdit}/> : <></>
            }
            {
                openDeletePopUp ?  <Warning setOpenDeletePopUp={setOpenDeletePopUp}/> : <></>
            }
        </div>
    )
}
export default DashBoard;