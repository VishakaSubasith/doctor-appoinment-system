"use client"
import React, { useState, memo } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';

interface Props {
    label: string;
    children: React.ReactNode;
    errorMessage?: string;
    isSavedField?: boolean;
    helperText?: string;
    className?: string;
    textClass?: string;
}

const FieldWrapper = ({
                          label,
                          children,
                          errorMessage,
                          isSavedField = false,
                          helperText,
                          className,
                          textClass
                      }: Props) => {
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className={`text-left my-5 w-full ${className}`}>
            <p className={`w-full text-md ${textClass}`}>{label}</p>
            {helperText && <p className="w-full text-xs text-purple-500 mb-1">{helperText}</p>}
            <div className="w-full pt-1">
                {!isEdit && isSavedField ? (
                    <div className="flex justify-between">
                        <input type="password" value="xxxxxxxx" disabled />
                        <button onClick={() => setIsEdit(true)}>
                            <AiTwotoneEdit className="text-xl" />
                        </button>
                    </div>
                ) : (
                    children
                )}
            </div>
            {Boolean(errorMessage) && <p className="w-full text-red-400 text-xs h-0">{errorMessage}</p>}
        </div>
    );
};

export default memo(FieldWrapper);
