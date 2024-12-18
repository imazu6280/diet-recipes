import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { useMenu } from "../hooks/useMenu";
import { SideMenuType } from "../type/sideMenu";
import { sideLink } from "../constants/sideLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headerLogo = {
    logo: "DIET-RECIPES",
};

export const Header = () => {
    const { open, menuOpen, handleCloseMenu }: SideMenuType = useMenu();

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
                <button
                    className="p-3 bg-slate-400"
                    onClick={menuOpen}
                ></button>
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
                    <button
                        className="p-3 bg-slate-400"
                        onClick={menuOpen}
                    ></button>
                </div>
            </div>
            {open && (
                <div
                    onClick={handleCloseMenu}
                    className="fixed inset-0 bg-transparent z-40"
                >
                    <nav
                        className={`absolute top-0 right-0 h-screen flex flex-col gap-y-7 pl-4 pr-6 pt-5 bg-white rounded-lg ${
                            open
                                ? "opacity-100 animate-slide-in-right z-80 flex"
                                : "opacity-0 animate-slide-out-right z-0 hidden"
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
                </div>
            )}
        </header>
    );
};
