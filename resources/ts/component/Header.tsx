import { SearchInput } from "./SearchInput"
import { Button } from "./Button"
import { buttonColors } from "../constants/buttonColors"
import { useMenu } from "../hooks/useMenu"
import { SideMenuType } from "../type/sideMenu"
import { MenuButton } from "./MenuButton"
import { Navbar } from "./Navbar"
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { DeleteMenuButton } from "./DeleteMenuButton"

const headerLogo = {
    logo: "DIET-RECIPES",
}

export const Header = () => {
    const { open, menuOpen, toggleDeleteOpen }: SideMenuType = useMenu()
    const location = useLocation()
    const isLocationCreate = location.pathname === "/create"

    return isLocationCreate ? (
        <header className="sticky top-0 z-30">
            <div className="p-2 flex justify-end gap-x-4 bg-white z-10 md:hidden">
                <p>
                    <Button
                        isIcon="images/trash-red.svg"
                        alt="削除"
                        text="削除"
                        color={buttonColors.red}
                        width="w-40"
                    />
                </p>

                <Button
                    isIcon=""
                    alt="保存して確認"
                    text="保存して確認"
                    color={buttonColors.gray}
                    width="w-40"
                />
                <Button
                    isIcon=""
                    alt="公開する"
                    text="公開する"
                    color={buttonColors.bgOrange}
                    width="w-40"
                />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden md:flex justify-between gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <div className="flex items-center gap-x-4">
                    <Button
                        isIcon=""
                        alt="公開する"
                        text="公開する"
                        color={buttonColors.bgOrange}
                        width="w-40"
                    />
                    <p onClick={toggleDeleteOpen} className="relative">
                        <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                        {open.deleteOpen && (
                            <ul className="absolute top-9 right-2 w-40 bg-white shadow-black rounded-sm">
                                <DeleteMenuButton text="削除" image="images/trash.svg" index={0} />
                            </ul>
                        )}
                    </p>
                </div>
            </div>
        </header>
    ) : (
        <header className="sticky top-0 z-50">
            <div className="p-2 flex justify-end bg-white z-10 md:hidden">
                <Button
                    isIcon="/images/header-write.svg"
                    alt="レシピを書く"
                    text="レシピを書く"
                    color={buttonColors.bgOrange}
                    width=""
                />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <form action="">
                    <SearchInput isStyle={true} id="search" type="text" top="top-0" />
                </form>
                <Button
                    isIcon="/images/header-write.svg"
                    alt="レシピを書く"
                    text="レシピを書く"
                    color={buttonColors.bgOrange}
                    width=""
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
                        width=""
                    />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <SearchInput isStyle={true} id="search" type="text" top="top-0" />
                    </form>
                    <MenuButton open={open} menuOpen={menuOpen} />
                </div>
            </div>
            <div
                onClick={menuOpen}
                className={`inset-0 ${open.sideOpen ? "fixed z-50 bg-gray-opacity" : "z-0"}`}
            >
                <Navbar open={open} />
            </div>
        </header>
    )
}
