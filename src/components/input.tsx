import { FormValues } from "@/pages"
import React from "react"
import { UseFormRegister } from "react-hook-form"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
    label?: string
    placeholder: string
    errorMessage?: string
    id: string
    register: UseFormRegister<FormValues>
}

const Input = ({ label, register, id, placeholder, ...props }: InputProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <label htmlFor={id} className="text-2xl md:w-1/3">
                {label}:
            </label>
            <div>
                <input
                    id={id}
                    className="rounded-xl border border-gray-300 bg-slate-100 h-10 md:text-center w-[400px] px-3"
                    placeholder={placeholder}
                    {...props}
                    {...(register && register(id, { required: true }))}
                />
                {props.hasError && (
                    <div className="text-red my-1">
                        <p className="text-red-400 text-xs">
                            {`${props.errorMessage}`}
                        </p>
                    </div> // Use the errorMessage prop to display the error message
                )}
            </div>
        </div>
    )
}

export default Input
