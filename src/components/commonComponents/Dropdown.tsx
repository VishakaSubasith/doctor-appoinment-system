import { useState } from 'react';

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
}
const FormDropdown = ({
                          name,
                          id,
                          options,
                          validation,
                          placeholder,
                          defaultValue = '',
                          style2,
                          disabled = false
                      }: Props) => {
    const [isValueSelected, setIsValueSelected] = useState(placeholder ? false : true);
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
                    onChange={(e) => {
                        setIsValueSelected(true);
                    }}
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

                {/*<select*/}
                {/*    className={*/}
                {/*   `capitalize focus:outline-none w-full py-3 px-2 border border-gray-300 bg-gray-100 ${*/}
                {/*                isValueSelected ? '' : 'text-gray-400'*/}
                {/*            }`*/}
                {/*    }*/}
                {/*    name={name}*/}
                {/*    id={id}*/}
                {/*    disabled={disabled}*/}
                {/*>*/}
                {/*    {options?.map((option) => (*/}
                {/*        <option key={option.label} value={option.value}>*/}
                {/*            {option.label.replace(/([a-z])([A-Z])/g, `$1 $2`)}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*</select>*/}

        </div>
    );
};

export default FormDropdown;
