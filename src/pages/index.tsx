import Template from "@/components/template"
import { useEffect, useState } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import TemplateForm from "@/components/templateForm"

export interface FormValues {
    movieTitle: string
    directedBy: string
    starring: string
    lastLine: string
    synopsis: string
    releaseYear: string
}

export default function Home() {
    const [backgroundColor, setBackgroundColor] = useState<string>("#cbd5e1")
    const [textColor, setTextColor] = useState<string>("#f84e14")
    const [accentColor, setaccentColor] = useState<string>("#FF33FF")

    const schema = yup.object().shape({
        movieTitle: yup.string().required("Movie title is required"),
        directedBy: yup.string().required("Director is required"),
        starring: yup.string().required("Starring is required"),
        lastLine: yup.string().required("Last line is required"),
        synopsis: yup.string().required("Synopsis is required"),
        releaseYear: yup.string().required("Release year is required"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues,
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    })

    console.log(getValues())
    useEffect(() => {
        watch()
    }, [watch])

    const onSubmit = async ({
        movieTitle,
        directedBy,
        starring,
        lastLine,
        synopsis,
        releaseYear,
    }: FormValues) => {
        console.log(
            movieTitle,
            directedBy,
            starring,
            lastLine,
            synopsis,
            releaseYear
        )
    }

    return (
        <div>
            <nav className="flex justify-between w-full bg-blue-300 p-8">
                <p className="text-4xl font-bold">
                    Custom{" "}
                    <span className="text text-3xl font-semibold">
                        Poster Store
                    </span>
                </p>
            </nav>
            <main
                className={`flex flex-col items-center justify-between p-24 pt-12`}
            >
                <div className="flex flex-col md:flex-row gap-2 w-full">
                    <div
                        style={{ background: backgroundColor }}
                        className=" xl:w-1/2 px-8 pb-4"
                    >
                        <Template
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            accentColor={accentColor}
                            movieTitle={getValues("movieTitle")}
                            directedBy={getValues("directedBy")}
                            starring={getValues("starring")}
                            lastLine={getValues("lastLine")}
                            synopsis={getValues("synopsis")}
                            releaseYear={getValues("releaseYear")}
                        />
                    </div>
                    <div className="xl:w-1/2 px-8">
                        <TemplateForm
                            onSubmit={onSubmit}
                            handleSubmit={handleSubmit}
                            register={register}
                            errors={errors}
                            setBackgroundColor={setBackgroundColor}
                            setTextColor={setTextColor}
                            setaccentColor={setaccentColor}
                            backgroundColor={backgroundColor}
                            textColor={textColor}
                            accentColor={accentColor}
                        />
                    </div>
                </div>
                <div>
                    <button
                        className="rounded-2xl border-2 border-black px-3 py-2 mt-6 text-2xl"
                        onClick={() => {
                            document.getElementById("submitTemplate")?.click()
                        }}
                    >
                        Submit
                    </button>
                </div>
            </main>
        </div>
    )
}
