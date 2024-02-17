'use client'
import FormInput from "@/components/commonComponents/FormInput";
import FieldWrapper from "@/components/commonComponents/FieldWrapper";
import Button from "@/components/commonComponents/Button";
import Link from "next/link";
import Title from "@/components/commonComponents/Title";
import FormDropdown from "@/components/commonComponents/Dropdown";
import {useState} from "react";
import {signUp} from "@/services/axios/user";
import { toast } from 'react-hot-toast';
import {useRouter} from "next/navigation";
import Spinner from "@/components/commonComponents/Spinner";

const SignUp = () =>{

    const router = useRouter()
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [username,setUsername] = useState<string>("")
    const [address,setAddress] = useState<string>("")
    const [gender,setGender] = useState<string>("male")
    const [mobile,setMobile] = useState<string>("")
    const [userType,setUserType] = useState<string>("user")
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const handleEmailChange = (e: any) => {
        setEmail(e);
    };
    const handlePasswordChange = (e: any) => {
        setPassword(e);
    };
    const handleUserNameChange = (e: any) => {
        setUsername(e);
    };
    const handleAddressChange = (e: any) => {
        setAddress(e);
    };
    const handleGenderChange = (e: any) => {
        setGender(e);
    };
    const handleUserTypeChange = (e: any) => {
        setUserType(e);
    };
    const handleMobileChange = (e: any) => {
        setMobile(e);
    };
    const handleSignUp = async ()=>{
        if (!username || !address||!mobile || !gender || !userType || !email ||!password) {
            toast.error('Please fill all required fields')
            return
        }
        try {
            setIsLoading(true)
            const result = await signUp(username,address,mobile,gender,userType,email,password);
            console.log("result",result)
            router.push('/user/signIn')
            toast.success("Registration Successful")
        }catch (e) {
            console.log(e)
            toast.error('Something went wrong while registration')
        }
        setIsLoading(false)
    }

    return (
        <div className="flex items-center justify-center h-screen"
             style={{backgroundImage: "url('/images/background.jpg')", backgroundSize: "cover"}}>
            <form className="border-2 border-blue-300 rounded bg-blue-200 p-10 bg-opacity-70">
                <div className="">
                    <Title>
                        <div className="text-4xl">Hi! Welcome to the DMS, Sign Up Here</div>
                    </Title>
                    <FieldWrapper className="" label="user Name">
                        <FormInput type="text" name="userName"
                                   onChange={handleUserNameChange}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter user Name"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Contact Number">
                        <FormInput type="text" name="mobile"
                                   onChange={handleMobileChange}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter contact Number"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Gender">
                        <FormDropdown name="gender"
                                      onChange={handleGenderChange}
                                      options={[{label:'Male' ,value:'male'} , {label:'Female', value:'female'}]}/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="User Type">
                        <FormDropdown name="userType"
                                      onChange={handleUserTypeChange}
                                      options={[{label:'User' ,value:'user'} , {label:'Admin', value:'Admin'}]}/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Email">
                        <FormInput type="text" name="email"
                                   onChange={handleEmailChange}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter Email"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Address">
                        <FormInput type="text" name="address"
                                   onChange={handleAddressChange}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter Address"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Password">
                        <FormInput type="password" name="password"
                                   onChange={handlePasswordChange}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter Password"/>
                    </FieldWrapper>
                    <div className="flex flex-col items-center mt-4">
                        <Button className="rounded border-2 border-slate-950 bg-slate-950 w-4/12" onClick={()=>handleSignUp()}>{isLoading? <Spinner/> :'Register'}</Button>
                        <div className="mt-2">Already have an account? <Link href="/user/signIn" className="text-blue-700"> Sign in</Link></div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default SignUp;