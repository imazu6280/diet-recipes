import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    isIcon?: string | IconProp;
    alt?: string;
    text: string;
    color: string;
    width: string;
    type: "submit" | "reset" | "button";
    formId?: string;
    recipeDeleteId?: number | null;
    favoriteToggleBtn?: () => void;
    deleteHandleSubmit?: (
        e: React.MouseEvent<HTMLButtonElement>,
        id?: number | null
    ) => void;
    toggleSearchOpen?: () => void;
    handleSearchSubmit?: () => void;
};

export const Button = ({
    isIcon,
    alt,
    text,
    color,
    width,
    type,
    formId,
    recipeDeleteId,
    favoriteToggleBtn,
    deleteHandleSubmit,
    toggleSearchOpen,
    handleSearchSubmit,
}: Props) => {
    return (
        <button
            className={`flex gap-x-1 justify-center items-center py-2 px-4 rounded-lg ${color} ${width} ${
                alt === "お気に入り登録" && "pc_sm:hidden lg:hidden"
            }`}
            type={type}
            {...(formId && { form: formId })}
            onClick={(e) => {
                if (text === "削除") {
                    deleteHandleSubmit?.(e, recipeDeleteId);
                } else if (text === "絞り込み検索") {
                    toggleSearchOpen?.();
                } else if (text === "検索") {
                    handleSearchSubmit?.();
                } else {
                    favoriteToggleBtn?.();
                }
            }}
        >
            {isIcon &&
                (typeof isIcon === "string" ? (
                    <img src={isIcon} alt={alt || "icon"} />
                ) : (
                    <FontAwesomeIcon icon={isIcon} />
                ))}
            {text}
        </button>
    );
};
