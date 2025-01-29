import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    isIcon?: string | IconProp
    alt?: string
    text: string
    color: string
    width: string
    type: "submit" | "reset" | "button"
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>
    ) => Promise<void> | void
}

export const Button = ({ isIcon, alt, text, color, width, type, onClick }: Props) => {
    return (
        <button
            className={`border- flex gap-x-1 justify-center items-center py-2 px-4 rounded-lg ${color} ${width}`}
            type={type}
            onClick={onClick}
        >
            {isIcon &&
                (typeof isIcon === "string" ? (
                    <img src={isIcon} alt={alt || "icon"} />
                ) : (
                    <FontAwesomeIcon icon={isIcon} />
                ))}
            {text}
        </button>
    )
}
