import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Title = ({ children, className }: Props) => {
    return (
        <p className={`my-3 text-xl md:text-xl tracking-wider font-semibold ${className}`}>
            {children}
        </p>
    );
};

export default Title;
