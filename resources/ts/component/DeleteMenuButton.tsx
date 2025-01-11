import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const DeleteMenuButton = () => {
    return (
        <ul className="absolute top-5 right-5 w-40 p-2 bg-white shadow-black rounded-lg">
            <li className="flex items-center gap-x-2 bg-white">
                <p className="w-5 h-5">
                    <img src="images/trash.svg" alt="" />
                </p>
                削除
            </li>
        </ul>
    )
}
