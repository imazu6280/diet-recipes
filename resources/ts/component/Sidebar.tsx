import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sideLink } from "../constants/text";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFavoriteTab } from "../redux/favoriteTabSlice";

type Props = {
    open: boolean;
    toggleSidebar: () => void;
};

export const Sidebar = ({ open, toggleSidebar }: Props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isLink = location.pathname;
    const isRecipe = location.pathname.includes("/recipes");

    return (
        <nav className="sticky top-0 h-screen flex flex-col gap-y-7 pt-5 bg-white rounded-lg md:hidden">
            <h1
                className={`flex items-center ${
                    open
                        ? "flex-col-reverse gap-y-7 justify-center px-2"
                        : "justify-between pl-4 pr-5"
                }`}
            >
                <Link to="/">
                    {open ? (
                        <img src="/images/logo.png" alt="" className="w-16" />
                    ) : (
                        <img src="/images/logo03.png" alt="" className="w-48" />
                    )}
                </Link>
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
                    <Link
                        to={item.link}
                        key={item.id}
                        onClick={() =>
                            item.id === 1 && dispatch(setFavoriteTab(false))
                        }
                    >
                        <li
                            className={`hover:text-super_black tb:text-sm ${
                                (item.link === isLink && "text-orange") ||
                                (isRecipe && item.id === 1 && "text-orange")
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
