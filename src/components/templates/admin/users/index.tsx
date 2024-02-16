"use client"
import React, { useState } from "react";
import FormInput from "@/components/commonComponents/FormInput";
import FieldWrapper from "@/components/commonComponents/FieldWrapper";
import Button from "@/components/commonComponents/Button";
import Link from "next/link";
import Title from "@/components/commonComponents/Title";
import { signIn } from "@/services/axios/user";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";

const AdminUsers = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <form className="border-2 border-blue-300 rounded bg-blue-200 p-10 bg-opacity-70">
               <div>
                This is user View
                </div>
            </form>
        </div>
    );
}

export default AdminUsers;
