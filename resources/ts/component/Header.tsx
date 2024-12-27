import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { useMenu } from "../hooks/useMenu";
import { SideMenuType } from "../type/sideMenu";
import { sideLink } from "../constants/sideLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuButton } from "./MenuButton";
import { Navbar } from "./Navbar";

const headerLogo = {
    logo: "DIET-RECIPES",
};

export const Header = () => {
    const { open, menuOpen }: SideMenuType = useMenu();

    return (
        <header className="sticky top-0">
            <div className="py-2 flex justify-end bg-white z-10 md:hidden">
                <Button isIcon={true} text="レシピを書く" />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <form action="">
                    <SearchInput isStyle={true} />
                </form>
                <Button isIcon={false} text="レシピを書く" />
                <MenuButton open={open} menuOpen={menuOpen} />
                {/* <button onClick={menuOpen} type="button" className="space-y-2">
                    <div
                        className={
                            open
                                ? "w-8 h-0.5 bg-black translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                        }
                    />
                    <div
                        className={
                            open
                                ? "opacity-0 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                        }
                    />
                    <div
                        className={
                            open
                                ? "w-8 h-0.5 bg-black -rotate-45 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                        }
                    />
                </button> */}
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{headerLogo.logo}</h1>
                    <Button isIcon={false} text="レシピを書く" />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <SearchInput isStyle={true} />
                    </form>
                    <MenuButton open={open} menuOpen={menuOpen} />
                    {/* <button
                        onClick={menuOpen}
                        type="button"
                        className="z-30 space-y-2"
                    >
                        <div
                            className={
                                open
                                    ? "w-8 h-0.5 bg-black translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                                    : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                            }
                        />
                        <div
                            className={
                                open
                                    ? "opacity-0 transition duration-500 ease-in-out"
                                    : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                            }
                        />
                        <div
                            className={
                                open
                                    ? "w-8 h-0.5 bg-black -rotate-45 transition duration-500 ease-in-out"
                                    : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                            }
                        />
                    </button> */}
                </div>
            </div>
            <div
                onClick={menuOpen}
                className={`inset-0 ${
                    open ? "fixed z-50 bg-gray-opacity" : "z-0"
                }`}
            >
                <Navbar open={open} />
                {/* <nav
                    className={`fixed ease-linear duration-300 ${
                        open
                            ? "right-0 top-0 h-screen flex flex-col gap-y-7 px-6 pt-5 bg-white rounded-lg"
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
                </nav> */}
            </div>
        </header>
    );
};
