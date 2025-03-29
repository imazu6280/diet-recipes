import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sideLink } from "../constants/text";
import { Link } from "react-router-dom";

type Props = {
    open: boolean;
    toggleSidebar: () => void;
};

export const Sidebar = ({ open, toggleSidebar }: Props) => {
    return (
        <nav className="sticky top-0 h-screen flex flex-col gap-y-7 pt-5 bg-white rounded-lg md:hidden">
            <h1
                className={`flex items-center ${
                    open
                        ? "flex-col-reverse gap-y-7 justify-center px-2"
                        : "justify-between pl-4 pr-5"
                }`}
            >
                {open ? (
                    <img src="/images/logo.png" alt="" className="w-16" />
                ) : (
                    <img src="/images/logo03.png" alt="" className="w-48" />
                )}
                <span
                    className={open ? "rotate-180" : "rotate-0"}
                    onClick={toggleSidebar}
                >
                    <img src="/images/side-arrow.svg" alt="" />
                </span>
            </h1>
            <ul
                className={`h-full flex flex-col gap-y-7 ${
                    open ? "px-5" : "pl-4 pr-5"
                }`}
            >
                {sideLink.map((item) => (
                    <Link to={item.link} key={item.id}>
                        <li
                            className={`tb:text-sm ${
                                item.id === 0 && "text-orange"
                            } ${open && "text-center"}`}
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className={open ? "mx-0" : "mr-2.5"}
                            />
                            {!open && item.label}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
