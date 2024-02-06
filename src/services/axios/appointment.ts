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

export {getAllAppointments}