
interface Props {
    placeholder?: string;
    type?: 'text' | 'number' | 'file' | 'password' | 'date';
    value?: any;
    name?: string;
    id?: string;
    validation?: { required?: boolean | string; maxLength?: number; pattern?: any };
    onChange?: (file: FileList) => void;
    min?: number;
    max?: number;
    accept?: string;
    disabled?: boolean;
    className?:string
}

const FormInput = ({
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
                   }: Props) =>
   name ? (
        <input
            className={
            `focus:outline-none w-full py-3 px-2 border border-gray-300 bg-gray-100 ${className}`
            }
            type={type}
            placeholder={placeholder}
            value={value}
            id={id}
            min={min}
            max={max}
            accept={accept}
            disabled={disabled}
        />
    ) : (
        <input
            className={

                    'focus:outline-none w-full py-3 px-2 border border-gray-300 bg-gray-100'
            }
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            min={min}
            max={max}
            accept={accept}
            disabled={disabled}
            onChange={(e) => onChange && e?.target?.files?.length && onChange(e.target.files)}
        />
    );

export default FormInput;
