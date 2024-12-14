import { faStar, faList, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SideLinkType } from "../type/sidebar"

const sideLink: SideLinkType = [
    { id: 0, label: "人気のレシピ", icon: faStar },
    { id: 1, label: "レシピ一覧", icon: faList },
    { id: 2, label: "登録する", icon: faPlus },
]

export const Sidebar = () => {
    return (
        <nav className="sticky top-0 h-screen flex flex-col gap-y-7 pl-4 pr-6 pt-5 bg-white rounded-lg md:hidden">
            <h1 className="flex justify-between items-center text-sideClamp font-bold">
                DIET RECIPES
                <span className="tb:w-3">
                    <img src={"/images/side-arrow.png"} alt="" />
                </span>
            </h1>
            <ul className="h-full flex flex-col gap-y-7">
                {sideLink.map((item) => (
                    <li
                        key={item.id}
                        className={`mr-1 tb:text-sm ${item.id === 0 && "text-orange"}`}
                    >
                        <FontAwesomeIcon icon={item.icon} style={{ marginRight: "10px" }} />
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
