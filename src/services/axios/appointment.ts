import axiosService from './index';

const getAllAppointments = async () => {
    try {
        const response = await axiosService.get(`appoinment/get-all-appoinments`);
        return response.data;
    } catch (e: any) {
        throw e.response;
    }
};
const createAppointment = async (userId:string,name:string,description:string,categoryId:string,dateAndTime:string,doctorId:string) => {
    try {
        const response = await axiosService.post(`appoinment/create`,{
            userId,
            name,
            description,
            categoryId,
            dateAndTime,
            doctorId
        });
        return response.data;
    } catch (e: any) {
        throw e.response;
    }
};

export {getAllAppointments,createAppointment}