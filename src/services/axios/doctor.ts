import axiosService from "@/services/axios/index";

const getAllDoctors = async () => {
    try {
        const response = await axiosService.get(`user/user-by-type?userType=doctor`);
        return response.data;
    } catch (e: any) {
        throw e.response;
    }
};

export {getAllDoctors}