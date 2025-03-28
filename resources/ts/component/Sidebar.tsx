import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sideLink } from "../constants/text";
import { useMenu } from "../hooks/useMenu";

type Props = {
    open: boolean;
    toggleSidebar: () => void;
};

export const Sidebar = ({ open, toggleSidebar }: Props) => {
    return (
        <nav className="sticky top-0 h-screen flex flex-col gap-y-7 pl-4 pr-6 pt-5 bg-white rounded-lg md:hidden">
            <h1 className="flex justify-between items-center text-sideClamp font-bold">
                DIET RECIPES
                <span
                    className={`tb:w-3 ${open ? "rotate-180" : "rotate-0"}`}
                    onClick={toggleSidebar}
                >
                    <img src={"/images/side-arrow.png"} alt="" />
                </span>
            </h1>
            <ul className="h-full flex flex-col gap-y-7">
                {sideLink.map((item) => (
                    <li
                        key={item.id}
                        className={`mr-1 tb:text-sm ${
                            item.id === 0 && "text-orange"
                        }`}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            style={{ marginRight: "10px" }}
                        />
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
