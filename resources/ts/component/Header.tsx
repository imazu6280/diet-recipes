import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { buttonColors } from "../constants/buttonColors";
import { useMenu } from "../hooks/useMenu";
import { SideMenuType } from "../type/sideMenu";
import { MenuButton } from "./MenuButton";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const headerLogo = {
    logo: "DIET-RECIPES",
};

export const Header = () => {
    const { open, menuOpen }: SideMenuType = useMenu();
    const location = useLocation();
    const isLocationCreate = location.pathname === "/create";

    return isLocationCreate ? (
        <header className="sticky top-0">
            <div className="p-2 flex justify-end gap-x-4 bg-white z-10 md:hidden">
                <Button
                    isIcon=""
                    alt="削除する"
                    text="削除する"
                    color={buttonColors.red}
                />
                <Button
                    isIcon=""
                    alt="保存して確認"
                    text="保存して確認"
                    color={buttonColors.gray}
                />
                <Button
                    isIcon=""
                    alt="公開する"
                    text="公開する"
                    color={buttonColors.bgOrange}
                />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <Button
                    isIcon=""
                    alt="公開する"
                    text="公開する"
                    color={buttonColors.bgOrange}
                />
                <div className="p-4">
                    <FontAwesomeIcon icon={faEllipsis} />
                    <ul className="hidden">
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{headerLogo.logo}</h1>
                    <Button
                        isIcon="/images/header-write.svg"
                        alt="レシピを書く"
                        text="レシピを書く"
                        color={buttonColors.bgOrange}
                    />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <SearchInput isStyle={true} />
                    </form>
                    <MenuButton open={open} menuOpen={menuOpen} />
                </div>
            </div>
            <div
                onClick={menuOpen}
                className={`inset-0 ${
                    open ? "fixed z-50 bg-gray-opacity" : "z-0"
                }`}
            >
                <Navbar open={open} />
            </div>
        </header>
    ) : (
        <header className="sticky top-0">
            <div className="p-2 flex justify-end bg-white z-10 md:hidden">
                <Button
                    isIcon="/images/header-write.svg"
                    alt="レシピを書く"
                    text="レシピを書く"
                    color={buttonColors.bgOrange}
                />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <form action="">
                    <SearchInput isStyle={true} />
                </form>
                <Button
                    isIcon="/images/header-write.svg"
                    alt="レシピを書く"
                    text="レシピを書く"
                    color={buttonColors.bgOrange}
                />
                <MenuButton open={open} menuOpen={menuOpen} />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">{headerLogo.logo}</h1>
                    <Button
                        isIcon="/images/header-write.svg"
                        alt="レシピを書く"
                        text="レシピを書く"
                        color={buttonColors.bgOrange}
                    />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <SearchInput isStyle={true} />
                    </form>
                    <MenuButton open={open} menuOpen={menuOpen} />
                </div>
            </div>
            <div
                onClick={menuOpen}
                className={`inset-0 ${
                    open ? "fixed z-50 bg-gray-opacity" : "z-0"
                }`}
            >
                <Navbar open={open} />
            </div>
        </header>
    );
};
