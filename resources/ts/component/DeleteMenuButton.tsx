import { useMenu } from "../hooks/useMenu"

type Props = {
    text: string
    image: string
    index: number
}

export const DeleteMenuButton = ({ text, image, index }: Props) => {
    return (
        <>
            <li
                className={`relative flex items-center gap-x-2 w-40 p-2 text-gray-opacity border-gray-opacity border-1 bg-white z-50  hover:bg-beige
                    ${index === 0 && "rounded-t-modal"}
                    ${index > 0 && "border-t-0 rounded-t-none"}
                    ${index === length + 1 && "rounded-b-modal rounded-t-none"}`}
            >
                {image && (
                    <p className="w-5 h-5">
                        <img src={image} alt="" />
                    </p>
                )}
                {text}
            </li>
            <div className="fixed w-screen h-screen bg-transparent top-0 left-0 z-40"></div>
        </>
    )
}
