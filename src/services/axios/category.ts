import axiosService from './index';

const getAllCategories = async () => {
    try {
        const response = await axiosService.get(`category/getAll`);
        return response.data;
    } catch (e: any) {
        console.log(e)
        throw e.response;
    }
};

export {getAllCategories}