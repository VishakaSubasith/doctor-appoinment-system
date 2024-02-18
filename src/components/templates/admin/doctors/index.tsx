'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/commonComponents/Button';
import { getAllDoctors } from '@/services/axios/doctor';
import Table from '@/components/commonComponents/Table';
import Spinner from '@/components/commonComponents/Spinner';
import AddDoctorPopup from './forms/AddDoctor';

const Doctors = () => {
  const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
  const [appointments, setAppointments] = useState<any>();
  const [loader, setLoader] = useState<any>(false);
  const [openPopUp, setOpenPopUp] = useState(false)

  const fetchAppointments = async () => {
    setLoader(true);
    try {
      const result = await getAllDoctors(); // Assuming getAllAppointments is an asynchronous function that fetches appointments
      setAppointments(
        result?.content?.map(
          (doctor: { username: string; email: string; contactno: string; address: string }) => {
            return {
              col1: doctor?.username,
              col2: doctor?.email,
              col3: doctor?.contactno,
              col4: doctor?.address
            };
          }
        )
      );
      setLoader(false);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [openPopUp])
  return (
    <div className="h-screen bg-white">
      <div className="mb-4 text-lg font-semibold">Doctors</div>
      <div className="ml-4 m-3 text-black ">
        <Button className="bg-amber-50 w-28 h-10" onClick={() => setOpenPopUp(true)}>
          <p className="text-black">Add doctors</p>
        </Button>
      </div>
      <div>
        {' '}
        <form className="border-2 border-blue-300 rounded bg-blue-200 p-10 bg-opacity-70">
          {!loader ? (
            <Table
              setOpenDeletePopUp={setOpenDeletePopUp}
              columns={['NAME', 'EMAIL', 'CONTACT NUMBER', 'ADDRESS']}
              data={appointments}
            />
          ) : (
            <>
              {' '}
              <Spinner />
            </>
          )}
        </form>
        {
            openPopUp && <AddDoctorPopup setOpenPopUp={setOpenPopUp} isEdit={undefined} setChange={undefined} />
        }
      </div>
    </div>
  );
};

export default Doctors;
