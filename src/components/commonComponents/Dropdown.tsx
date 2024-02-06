import React, { useState } from 'react';

interface Props {
    name: string;
    id?: string;
    options: {
        label: string;
        value: any;
    }[];
    validation?: { required?: boolean | string };
    placeholder?: string;
    defaultValue?: string;
    style2?: boolean;
    disabled?: boolean;
    onChange?: (value: string | number | FileList) => void;
}
const FormDropdown = ({
                          name,
                          id,
                          options,
                          validation,
                          placeholder,
                          defaultValue = '',
                          style2,
                          disabled = false,
                            onChange
                      }: Props) => {
    const [isValueSelected, setIsValueSelected] = useState(placeholder ? false : true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            setIsValueSelected(true);
            onChange(e.target.value);
        }

        }

    return (
        <div>

                <select
                    disabled={disabled}
                    className={
                    `capitalize focus:outline-none w-full pt-3 pb-4 px-2 border border-gray-300 bg-gray-100 ${
                                isValueSelected ? '' : 'text-gray-400'
                            }`
                    }
                    id={id}
                    defaultValue={defaultValue}
                    onChange={handleChange}

                >
                    {placeholder && (
                        <option disabled value="" className="">
                            {placeholder}
                        </option>
                    )}
                    {options?.map((option) => (
                        <option key={option.label} value={option.value}>
                            {option.label.replace(/([a-z])([A-Z])/g, `$1 $2`)}
                        </option>
                    ))}
                </select>

        </div>
    );
};

export default FormDropdown;
