import React from 'react';

interface Props {
    placeholder?: string;
    type?: 'text' | 'number' | 'file' | 'password' | 'date';
    value?: any;
    name?: string;
    id?: string;
    validation?: { required?: boolean | string; maxLength?: number; pattern?: any };
    onChange?: (value: string | number | FileList) => void;
    min?: number;
    max?: number;
    accept?: string;
    disabled?: boolean;
    className?: string;
}

const FormInput: React.FC<Props> = ({
                                        placeholder = '',
                                        type = 'text',
                                        value,
                                        id,
                                        name,
                                        validation,
                                        onChange,
                                        min,
                                        max,
                                        className,
                                        accept,
                                        disabled
                                    }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {

                onChange(parseFloat(e.target.value));

        }
    };

    return (
        <>
            {name ? (
                <input
                    className={`focus:outline-none w-full py-3 px-2 border border-gray-300 bg-gray-100 ${className}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    id={id}
                    name={name}
                    min={min}
                    max={max}
                    accept={accept}
                    disabled={disabled}
                    onChange={handleChange}
                />
            ) : (
                <input
                    className={`focus:outline-none w-full py-3 px-2 border border-gray-300 bg-gray-100 ${className}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    id={id}
                    min={min}
                    max={max}
                    accept={accept}
                    disabled={disabled}
                    // onChange={(e) => onChange && onChange(e.target.files)}
                />
            )}
        </>
    );
};

export default FormInput;
