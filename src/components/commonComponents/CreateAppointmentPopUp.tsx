import {Fragment, useEffect, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Title from "@/components/commonComponents/Title";
import FieldWrapper from "@/components/commonComponents/FieldWrapper";
import FormInput from "@/components/commonComponents/FormInput";
import FormDropdown from "@/components/commonComponents/Dropdown";
import Button from "@/components/commonComponents/Button";
import Link from "next/link";
import {createAppointment, getAllAppointments} from "@/services/axios/appointment";
import {toast} from "react-hot-toast";
import {getAllCategories} from "@/services/axios/category";
import {getAllDoctors} from "@/services/axios/doctor";

export default function CreateAppointmentPopUp({setOpenPopUp,isEdit,setChange}: { setOpenPopUp: any,isEdit:any,setChange:any }) {
    const [open, setOpen] = useState(true)
    const [categories, setCategories] = useState([])
    const [doctors, setDoctors] = useState([])

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [doctor, setDoctor] = useState("")
    const [notes, setNotes] = useState("")
    const [date, setDate] = useState("")

    const handleNameChange = (e: any) => {
        setName(e);
    };

    const handleCategoryChange = (e: any) => {
        setCategory(e);
    };
    const handleDoctorChange = (e: any) => {
        setDoctor(e);
    };

    const handleNotesChange = (e: any) => {
        setNotes(e);
    };
    const handleDateChange = (e: any) => {
        setDate(e);
    };

    const cancelButtonRef = useRef(null)


    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const result = await getAllCategories();
                const doctors = await getAllDoctors();
                console.log(result);
                setCategories(result?.content);
                setDoctors(doctors.content);
                setCategory(result.content[0]._id);
                setDoctor(doctors?.content[0].userId);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAppointments();
        }, []);

    const onSubmit = async () =>{
        try {
            if(typeof window !== 'undefined') {
                const userId = localStorage.getItem('_id')
                await createAppointment(userId || "", name, notes, category, date, doctor)
                toast.success('Appointment success')
                setChange(true)
                setOpenPopUp(false)
            }
        }catch (e) {
            toast.error('something went wrong while creating appointment')
        }


    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className=" w-full">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                {isEdit ? 'Edit' : 'New'} Appointment
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="w-full">
                                                    <FieldWrapper className="" label="Name">
                                                        <FormInput type="text" name="name"
                                                                   onChange={handleNameChange}
                                                                   className="rounded bg-blue-300 border-blue-300 "
                                                                   placeholder="Enter Name"/>
                                                    </FieldWrapper>
                                                    <FieldWrapper className="" label="Category">
                                                        <FormDropdown name="category"
                                                                      onChange={handleCategoryChange}


                                                                      options={categories && categories?.map((category:any)=>{
                                                                          return {label: category?.category,value:category?.categoryId}
                                                                      })}/>
                                                    </FieldWrapper>
                                                    <FieldWrapper className="" label="Doctor Name">
                                                        <FormDropdown name="doctorName"
                                                                      onChange={handleDoctorChange}
                                                                      options={doctors && doctors?.map((doctor:any)=>{
                                                                          return {label: doctor?.username,value:doctor?.userId}
                                                                      })}/>
                                                    </FieldWrapper>
                                                    <FieldWrapper className="" label="Notes">
                                                        <FormInput type="text" name="notes"
                                                                   onChange={handleNotesChange}

                                                                   className="rounded bg-blue-300 border-blue-300 "
                                                                   placeholder="Enter Notes"/>
                                                    </FieldWrapper>
                                                    <FieldWrapper className="" label="Date">
                                                        <FormInput type="date" name="date"
                                                                   onChange={handleDateChange}

                                                                   className="rounded bg-blue-300 border-blue-300 "
                                                                   placeholder="Enter Date"/>
                                                    </FieldWrapper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                        onClick={() => onSubmit()}
                                    >
                                        Save {isEdit ? 'Changes' :''}
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpenPopUp(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
