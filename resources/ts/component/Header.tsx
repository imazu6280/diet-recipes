import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Header = () => {
    return (
        <div className="sticky top-0 pt-2 flex justify-end bg-white">
            <p className="py-2 px-4 mr-6 text-white bg-orange rounded-lg">
                <FontAwesomeIcon icon={faPenToSquare} className="pr-2" />
                レシピを書く
            </p>
        </div>
    )
}
