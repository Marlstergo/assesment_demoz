import React from "react"
import { backgroundColors, textColors } from "../../utils/constants"
import TextArea from "@/components/textArea"
import Input from "@/components/input"
import {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form"
import { FormValues } from "@/pages"

interface FormInterface {
    handleSubmit: UseFormHandleSubmit<FormValues, undefined>
    onSubmit: (data: FormValues) => void
    register: UseFormRegister<FormValues>
    errors: FieldErrors<FormValues>
    setBackgroundColor: React.Dispatch<React.SetStateAction<string>>
    setTextColor: React.Dispatch<React.SetStateAction<string>>
    setaccentColor: React.Dispatch<React.SetStateAction<string>>
    backgroundColor: string
    textColor: string
    accentColor: string
}

const TemplateForm = ({
    handleSubmit,
    setaccentColor,
    errors,
    onSubmit,
    register,
    setBackgroundColor,
    setTextColor,
    backgroundColor,
    textColor,
    accentColor,
}: FormInterface) => {
    return (
        <form id="template" onSubmit={handleSubmit && handleSubmit(onSubmit)}>
            <p className="text-4xl font-bold">Customize movie poster</p>
            <div className="my-6">
                <p className="text-2xl mb-4">Upload Artwork</p>
                <div className="flex gap-6 text-xl">
                    <div
                        onClick={() => {
                            document.getElementById("fileUpload")?.click()
                        }}
                        className="cursor-pointer size-40 flex justify-center items-center border-gray-500 rounded-2xl bg-slate-200 flex-col p-4 text-center"
                    >
                        <p className="text-7xl">+</p>

                        <p>Upload 50mb max</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Instructions:</p>
                        <ul className="">
                            <li>Upload Movie Artwork</li>
                            <li>Click Artwork on Preview to Position/Crop</li>
                            <li>
                                Position/Crop Artwork Within Position Preview.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-xl my-6">
                    <p className="text-3xl font-semibold mb-3">Enter Text:</p>
                    <div className="flex flex-col gap-4">
                        <Input
                            label="Movie Title"
                            placeholder="Enter Movie Title here"
                            id="movieTitle"
                            register={register}
                            hasError={!!errors.movieTitle?.message}
                            errorMessage={errors.movieTitle?.message}
                        />
                        <Input
                            register={register}
                            hasError={!!errors.directedBy?.message}
                            errorMessage={errors.directedBy?.message}
                            id="directedBy"
                            label="Directed By"
                            placeholder="Enter Director's name here"
                        />
                        <Input
                            label="Starring"
                            placeholder="Enter Starring here"
                            register={register}
                            hasError={!!errors.starring?.message}
                            errorMessage={errors.starring?.message}
                            id="starring"
                        />
                        <Input
                            label="Last Line"
                            register={register}
                            hasError={!!errors.lastLine?.message}
                            errorMessage={errors.lastLine?.message}
                            id="lastLine"
                            placeholder="Enter Last Line here"
                        />
                        <TextArea
                            label="Synopsis"
                            id="synopsis"
                            placeholder="Enter Synopsis here"
                            register={register}
                            hasError={!!errors.synopsis?.message}
                            errorMessage={errors.synopsis?.message}
                        />
                        <Input
                            label="Release Year"
                            id="releaseYear"
                            type="date"
                            placeholder="Enter Release Year here"
                            register={register}
                            hasError={!!errors.releaseYear?.message}
                            errorMessage={errors.releaseYear?.message}
                        />
                    </div>
                </div>

                <div className="flex flex-col tex-2xl gap-4">
                    <p className="text-2xl">Set Colors:</p>
                    <div className="flex">
                        <p className="text-2xl font-bold">Background:</p>
                        <div className="flex gap-2 mx-3 items-center">
                            <div
                                style={{
                                    backgroundColor: backgroundColor,
                                }}
                                className="border-black border-2 h-8 rounded-lg w-24"
                            ></div>
                            <p>Click to Customize background</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p>Recomended:</p>
                        <div className="flex-1 flex gap-2 mx-3 items-center">
                            {backgroundColors.map((color, i) => (
                                <div className="flex items-center gap-2">
                                    <p>{i + 1}.</p>
                                    <div
                                        style={{
                                            backgroundColor: color,
                                        }}
                                        onClick={() => {
                                            setBackgroundColor(color)
                                        }}
                                        className="border-black border-2 h-8 rounded-lg w-12 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-2xl font-bold">Text Color:</p>
                        <div className="flex gap-2 mx-3 items-center">
                            <div
                                style={{ background: textColor }}
                                className="border-black border-2 h-8 rounded-lg w-24"
                            ></div>
                            <p>Click to change Text Color</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p>Recomended:</p>
                        <div className="flex-1 flex gap-2 mx-3 items-center">
                            {textColors.map((color, i) => (
                                <div className="flex items-center gap-2">
                                    <p>{i + 1}.</p>
                                    <div
                                        style={{
                                            backgroundColor: color,
                                        }}
                                        onClick={() => setTextColor(color)}
                                        className="border-black border-2 h-8 rounded-lg w-12 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p>Accents:</p>
                        <div className="flex-1 flex gap-2 mx-3 items-center">
                            {backgroundColors.map((color, i) => (
                                <div className="flex items-center gap-2">
                                    <p>{i + 1}.</p>
                                    <div
                                        style={{
                                            backgroundColor: color,
                                        }}
                                        onClick={() => {
                                            setaccentColor(color)
                                        }}
                                        className="cursor-pointer border-black border-2 h-8 rounded-lg w-12"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <input hidden type="file" id="fileUpload" />

            <input hidden id="submitTemplate" type="submit" />
        </form>
    )
}

export default TemplateForm
