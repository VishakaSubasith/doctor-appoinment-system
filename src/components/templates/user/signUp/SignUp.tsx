'use client'
import FormInput from "@/components/commonComponents/FormInput";
import FieldWrapper from "@/components/commonComponents/FieldWrapper";
import Button from "@/components/commonComponents/Button";
import Link from "next/link";
import Title from "@/components/commonComponents/Title";
import FormDropdown from "@/components/commonComponents/Dropdown";
import {useState} from "react";
import {signUp} from "@/services/axios/user";

const SignUp = () =>{
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [username,setUsername] = useState<string>("")
    const [address,setAddress] = useState<string>("")
    const [gender,setGender] = useState<string>("")
    const [mobile,setMobile] = useState<string>("")

    const handleSignUp = async ()=>{

        const result = await signUp(username,address,mobile,gender,email,password);
        console.log(result)

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
                                   onChange={(e:any)=>{setUsername(e.target.value)}}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter user Name"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Contact Number">
                        <FormInput type="text" name="mobile"
                                   onChange={(e:any)=>{setMobile(e.target.value)}}
                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter contact Number"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Gender">
                        <FormDropdown name="gender"


                                      options={[{label:'Male' ,value:'male'} , {label:'Female', value:'female'}]}/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Email">
                        <FormInput type="text" name="email"
                                   onChange={(e:any)=>{setEmail(e.target.value)}}

                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter Email"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Address">
                        <FormInput type="text" name="address"
                                   onChange={(e:any)=>{setAddress(e.target.value)}}

                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter Address"/>
                    </FieldWrapper>
                    <FieldWrapper className="" label="Password">
                        <FormInput type="password" name="password"
                                   onChange={(e:any)=>{setPassword(e.target.value)}}

                                   className="rounded bg-blue-300 border-blue-300 placeholder-blue-400"
                                   placeholder="Enter Password"/>
                    </FieldWrapper>
                    <div className="flex flex-col items-center mt-4">
                        <Button className="rounded border-2 border-slate-950 bg-slate-950 w-4/12" onClick={()=>handleSignUp()}>Register</Button>
                        <p className="mt-2">Already have an account? <Link href="/user/signIn"
                                                                         className="text-blue-700"> Sign in</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );

}
export default SignUp;