import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    isIcon?: string | IconProp
    alt?: string
    text: string
    color: string
    width: string
    type: "submit" | "reset" | "button"
    formId?: string
    favoriteToggleBtn?: () => void
}

export const Button = ({
    isIcon,
    alt,
    text,
    color,
    width,
    type,
    formId,
    favoriteToggleBtn,
}: Props) => {
    return (
        <button
            className={`border- flex gap-x-1 justify-center items-center py-2 px-4 rounded-lg ${color} ${width} ${
                alt === "お気に入り登録" && "pc_sm:hidden lg:hidden"
            }`}
            type={type}
            {...(formId && { form: formId })}
            onClick={favoriteToggleBtn}
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
