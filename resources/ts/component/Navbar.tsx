import { sideLink } from "../constants/sideLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    open: boolean;
};

export const Navbar = ({ open }: Props) => {
    return (
        <nav
            className={`fixed ease-linear duration-200 ${
                open
                    ? "right-0 top-0 h-screen flex flex-col gap-y-7 px-6 pt-5 bg-white"
                    : "-right-full"
            }`}
        >
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
