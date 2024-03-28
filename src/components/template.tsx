import React from "react"

interface TemplateProps {
    backgroundColor: string
    textColor: string
    accentColor: string
    movieTitle?: string
    directedBy?: string
    starring?: string
    lastLine?: string
    synopsis?: string
    releaseYear?: string
}

const Template = ({
    backgroundColor,
    textColor,
    accentColor,
    movieTitle = "",
    directedBy = "",
    starring = "",
    lastLine = "",
    synopsis = "",
    releaseYear = "",
}: TemplateProps) => {
    return (
        <div
            style={{
                color: textColor,
            }}
        >
            <div className="flex justify-between py-3">
                <div className="flex mt-2">
                    <div
                        style={{ background: backgroundColor }}
                        className=" bg-indigo-800 border-2 border-black h-6 w-24"
                    ></div>
                    <div className=" bg-orange-500 h-6 w-24"></div>
                    <div className=" bg-green-500 h-6 w-24"></div>
                </div>
                <div>
                    <p style={{ color: accentColor }} className="text-3xl">
                        {releaseYear}
                    </p>
                </div>
            </div>
            <div>
                <p className="my-3 text-3xl font-bold">{movieTitle}</p>
            </div>
            <div className="h-[700px] w-full bg-black"></div>
            <div className="flex mt-6">
                <div className="md:w-1/2">
                    <p className="text-2xl">Directed By {directedBy}</p>
                    <p>Staring {starring}</p>
                    <p>Music By (Music1) </p>
                </div>
                <div className="md:w-1/2">
                    <p
                        style={{
                            color: textColor,
                        }}
                    >
                        {synopsis}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Template
