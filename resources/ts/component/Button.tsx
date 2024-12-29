import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    isIcon: string | IconProp
    alt: string
    text: string
    color: string
}

export const Button = ({ isIcon, alt, text, color }: Props) => {
    return (
        <button
            className={`border- flex gap-x-1 justify-center items-center py-2 px-4 rounded-lg ${color}`}
        >
            {typeof isIcon === "string" ? (
                <img src={isIcon} alt={alt} />
            ) : (
                <FontAwesomeIcon icon={isIcon} />
            )}
            {text}
        </button>
    )
}
