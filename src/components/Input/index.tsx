import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({ icon, ...props }) => {
    return (
        <div
            className={`${
                icon ? 'pl-2' : ''
            } flex flex-row items-center justify-start rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`}
        >
            {icon ? icon : null}

            <input
                {...props}
                className={`${
                    icon ? 'ml-2' : ''
                } block w-full border-none text-sm font-normal leading-6 focus:outline-none`}
            />
        </div>
    )
}
