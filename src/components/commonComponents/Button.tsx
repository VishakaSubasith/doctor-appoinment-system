import Spinner from './Spinner';

interface Props {
    children?: React.ReactNode;
    type?: 'button' | 'reset' | 'submit';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
}

const Button = ({
                    type = 'button',
                    children,
                    className,
                    onClick,
                    disabled = false,
                    isLoading = false
                }: Props) => {
    return (
        <button
            onClick={onClick}
            className={
                isLoading || disabled
                    ? `w-full h-full ${className} rounded-lg bg-purple-300 text-white`
                    : `bg-serv-purple w-full h-full rounded-lg text-white ${className}`
            }
            type={type}
            disabled={disabled || isLoading}
        >
            {isLoading ? <Spinner /> : <div className="p-1">{children}</div>}
        </button>
    );
};

export default Button;