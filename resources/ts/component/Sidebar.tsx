import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SideLinkType } from "../type/sidebar"

const sideLink: SideLinkType = [
    { id: 0, label: "記録する" },
    { id: 1, label: "人気のレシピ" },
]

export const Sidebar = () => {
    return (
        <div className="sticky top-0 pl-4 pr-6 pt-2 pb-5 bg-white rounded-lg">
            <h1 className="flex justify-between items-center text-2xl">
                DIET RECIPES
                <FontAwesomeIcon icon={faAngleLeft} />
            </h1>
            <ul>
                {sideLink.map((item) => (
                    <li key={item.id} className="pt-4 mr-1.">
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}
