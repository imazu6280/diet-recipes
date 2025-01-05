type Props = {
    image: string
    detail: string
    step_number: number
}

export const Card = ({ image, detail, step_number }: Props) => {
    return (
        <li className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-4">
            <span className="w-6 h-6 text-center text-white bg-black rounded-full">
                {step_number}
            </span>
            <div className="flex flex-col gap-y-2 sm:flex-col-reverse">
                <figure
                    className="w-full rounded-l sm:w-1/2
                            "
                >
                    <img src={image} alt="" />
                </figure>
                <figcaption>{detail}</figcaption>
            </div>
        </li>
    )
}
