'use client'
import FormInput from "@/components/commonComponents/FormInput";
import FieldWrapper from "@/components/commonComponents/FieldWrapper";
import Button from "@/components/commonComponents/Button";
import Link from "next/link";
import Title from "@/components/commonComponents/Title";
import {useState} from "react";
import {signIn} from "@/services/axios/user";

const SignIn = () => {

    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const handleSignIn = async ()=>{

        const result = await signIn(email,password);
        console.log(result)

    }

    return (
        <div className="flex items-center justify-center h-screen" style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: "cover" }}>
            <form className="border-2 border-blue-300 rounded bg-blue-200 p-10 bg-opacity-70">
                <div className="">
                    <Title>
                        <div className="text-4xl">Welcome Back! Sign In Here</div>
                    </Title>
                    <FieldWrapper className="" label="Email">
                        <FormInput type="text" name="email" onChange={(e:any)=>setEmail(e.target.value)} className="rounded bg-blue-400 border-blue-300 placeholder-blue-400" placeholder="Enter Email" />
                    </FieldWrapper>
                    <FieldWrapper className="" label="Password">
                        <FormInput type="password" name="password" onChange={(e:any)=>setPassword(e.target.value)} className="rounded bg-blue-300 border-blue-300 placeholder-blue-400" placeholder="Enter Password" />
                    </FieldWrapper>
                    <div className="flex flex-col items-center mt-4">
                        <Button className="rounded border-2 border-slate-950 bg-slate-950 w-4/12" onClick={()=>handleSignIn()}>Sign In</Button>
                        <p className="mt-2">Do not have an account? <Link href="/user/signUp" className="text-blue-700"> Sign Up</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
