"use client"
import React, { useEffect, useState } from "react";
import Table from "@/components/commonComponents/Table";
import { getAllAppointments } from "@/services/axios/appointment";
import Spinner from "@/components/commonComponents/Spinner";

const Appoinments = () => {
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false)
    const [appointments, setAppointments] = useState<any>()
    const [loader, setLoader] = useState<any>(false);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoader(true);
                const result = await getAllAppointments(); // Assuming getAllAppointments is an asynchronous function that fetches appointments
                setAppointments(result?.content);
                setLoader(false);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };
        fetchAppointments();
    }, []);

    return (
        <div className="h-screen bg-white">
             <div className="mb-4 text-lg font-semibold">
                Appoinments
                </div>
                <div> <form className="border-2 border-blue-300 rounded bg-blue-200 p-10 bg-opacity-70">
              {
                !loader ? <Table setOpenDeletePopUp={setOpenDeletePopUp}
                columns={["NAME","CATEGORY","DOCTOR NAME","NOTES","DATE"]}
                data={appointments}
                /> : <><Spinner /> </>
              }
              
          </form></div>
           
        </div>
    );
}

export default Appoinments;
