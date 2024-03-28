import { FormValues } from "@/pages"
import React from "react"
import { UseFormRegister } from "react-hook-form"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
    label?: string
    placeholder: string
    errorMessage?: string
    register: UseFormRegister<FormValues>
}

const TextArea = ({ label, id, placeholder, ...props }: TextAreaProps) => {
    return (
        <div className="flex gap-3 items-start">
            <label htmlFor="title" className="text-2xl w-1/3">
                {label}:
            </label>
            <textarea
                id={id}
                className="rounded-xl border border-gray-300 bg-slate-100 h-10 text-center w-[400px]"
                placeholder={placeholder}
                rows={5}
                {...(props.register && props.register(id, { required: true }))}
            />
            {props.hasError && (
                <div className="text-red my-1">
                    <p className="text-red-400 text-xs">
                        {`${props.errorMessage}`}
                    </p>
                </div>
            )}
        </div>
    )
}

export default TextArea
