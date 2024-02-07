import axiosService from './index';

const getAllAppointments = async () => {
    try {
        const response = await axiosService.get(`appoinment/get-all-appoinments`);
        return response.data;
    } catch (e: any) {
        console.log(e)
        throw e.response;
    }
};
const createAppointment = async (userId:string,name:string,description:string,category:string,dateAndTime:string,doctorId:string) => {
    try {
        console.log("userId",userId)
        const response = await axiosService.post(`appoinment/create`,{
            userId,
            name,
            description,
            category,
            dateAndTime,
            doctorId
        });
        return response.data;
    } catch (e: any) {
        console.log(e)
        throw e.response;
    }
};

export {getAllAppointments,createAppointment}