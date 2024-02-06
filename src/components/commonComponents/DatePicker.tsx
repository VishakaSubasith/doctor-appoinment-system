
import React from 'react';

interface Props {
    onChange?: (date: string) => void;
    value?: string;

}

const DatePicker = ({ onChange, value }: Props) => {
    return (
        <div className="relative w-full">
            <input
                inline-datepicker
                data-date
                type="date"
                className={'focus:outline-none py-3 px-2 border border-gray-300 bg-gray-100 w-full'}
                placeholder="Select date"
                onChange={(e) => onChange && onChange(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default DatePicker;
