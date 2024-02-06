import axiosService from './index';

const signIn = async (email: string , password: string) => {
    try {
        const response = await axiosService.post(`user/login`,{email:email,password:password});
        return response.data;
    } catch (e: any) {
        console.log(e)
        throw e.response;
    }
};
const signUp = async (username:string,address:string, contactno:string,gender:string ,userType:string,email: string , password: string) => {
    try {
        const response = await axiosService.post(`user/register`,{username:username,email:email,address:address,contactno:contactno,gender:gender,userType:userType,password:password});
        return response.data;
    } catch (e: any) {
        throw e.response;
    }
};

export { signIn, signUp };