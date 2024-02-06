'use client'
import Header from "@/components/commonComponents/Header";
import exp from "node:constants";
import Table from "@/components/commonComponents/Table";
import Button from "@/components/commonComponents/Button";
import PopUp from "@/components/commonComponents/PopUp";
import {useEffect, useState} from "react";
import Warning from "@/components/commonComponents/Waning";
import {getAllAppointments} from "@/services/axios/appointment";
import {toast} from "react-hot-toast";

const DashBoard =() =>{
    const [openPopUp, setOpenPopUp] = useState(false)
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [appointments, setAppointments] = useState<any>()


    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const result = await getAllAppointments(); // Assuming getAllAppointments is an asynchronous function that fetches appointments
                console.log(result);
                setAppointments(result?.content);
                toast.success('Appointments fetching success')
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, []);

    useEffect(() => {

    }, [appointments]);

    return (
        <div className="w-screen h-screen">
            <Header/>
            <div className="w-1/5 p-3 pl-40 m-3 text-black">
                <Button className="bg-amber-50 " onClick={()=>setOpenPopUp(true)}><p className='text-black'>Create Appointment</p></Button>
            </div>
            <div className="mx-40 mt-10">
                <Table setOpenDeletePopUp={setOpenDeletePopUp}
                columns={["NAME","CATEGORY","DOCTOR NAME","NOTES","DATE"]}
                data={appointments}
                />
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