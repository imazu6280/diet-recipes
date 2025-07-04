import { Link, useLocation } from "react-router-dom";
import { sideLink } from "../constants/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {
    open: {
        sideOpen: boolean;
    };
};

export const Navbar = ({ open }: Props) => {
    const location = useLocation();
    const isFavoriteTab = useSelector(
        (state: RootState) => state.favoriteTab.isFavoriteTab
    );
    const isLink = location.pathname;
    const isRecipe = location.pathname.includes("/recipes");

    return (
        <nav
            className={`fixed ${
                open.sideOpen
                    ? "right-0 top-0 h-screen flex flex-col gap-y-7 px-6 pt-5 bg-white ease-linear duration-200"
                    : "-right-full"
            }`}
        >
            <h1 className="flex justify-between items-center text-sideClamp font-bold">
                <img src="/images/logo03.png" alt="" className="w-48" />
                <span className="tb:w-3">
                    <img src={"/images/side-arrow.png"} alt="" />
                </span>
            </h1>
            <ul className="h-full flex flex-col gap-y-7">
                {sideLink.map((item) => (
                    <Link to={item.link} key={item.id}>
                        <li
                            key={item.id}
                            className={`mr-1 tb:text-sm hover:text-super_black ${
                                (item.link === isLink && "text-orange") ||
                                (isRecipe && item.id === 1 && "text-orange")
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                style={{ marginRight: "10px" }}
                            />
                            {item.label}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
