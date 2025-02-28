import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { buttonColors } from "../constants/buttonColors";
import { useMenu } from "../hooks/useMenu";
import { SideMenuType } from "../type/sideMenu";
import { MenuButton } from "./MenuButton";
import { Navbar } from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { DeleteMenuButton } from "./DeleteMenuButton";
import { sideLink } from "../constants/text";
import { useRecipeCreate } from "../hooks/useRecipeCreate";
import { useRecipeDelete } from "../hooks/useRecipeDelete";

const headerLogo = {
    logo: "DIET-RECIPES",
};

export const Header = () => {
    const { open, menuOpen, toggleDeleteOpen }: SideMenuType = useMenu();
    const { createInputValue, favoriteToggleBtn } = useRecipeCreate();
    const { deleteHandleSubmit } = useRecipeDelete();
    const { id } = useParams();
    const location = useLocation();
    const isLocation =
        location.pathname === "/create" || location.pathname.includes("/edit/");
    const isLocationEdit = location.pathname.includes("/edit/");

    return isLocation ? (
        <header className="sticky top-0 z-30">
            <div className="p-2 flex justify-end gap-x-4 bg-white z-10 md:hidden">
                {isLocationEdit && (
                    <Button
                        isIcon="/images/trash-red.svg"
                        alt="削除"
                        text="削除"
                        color={buttonColors.red}
                        width="w-40"
                        type="button"
                        deleteHandleSubmit={(e) => {
                            id !== undefined &&
                                deleteHandleSubmit(e, Number(id));
                        }}
                    />
                )}
                <Button
                    isIcon={sideLink[0].icon}
                    alt="お気に入り"
                    text="お気に入り"
                    color={`${
                        createInputValue.is_favorite === 0
                            ? buttonColors.gray
                            : buttonColors.bgOrange
                    }`}
                    width="w-40"
                    type="button"
                    favoriteToggleBtn={favoriteToggleBtn}
                />
                {isLocationEdit ? (
                    <Button
                        isIcon=""
                        alt="更新する"
                        text="更新する"
                        color={buttonColors.bgOrange}
                        width="w-40"
                        type="submit"
                        formId="edit"
                    />
                ) : (
                    <Button
                        isIcon=""
                        alt="公開する"
                        text="公開する"
                        color={buttonColors.bgOrange}
                        width="w-40"
                        type="submit"
                        formId="create"
                    />
                )}
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
                        type="submit"
                        formId="create"
                    />
                    <div onClick={toggleDeleteOpen} className="relative">
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            className="text-gray"
                        />
                        {open.deleteOpen && (
                            <ul className="absolute top-9 right-2 w-40 bg-white shadow-modal rounded-sm">
                                <DeleteMenuButton
                                    key=""
                                    text="削除"
                                    image="/images/trash.svg"
                                    index={0}
                                    type=""
                                />
                            </ul>
                        )}
                    </div>
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
                    type="button"
                />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <h1 className="text-lg font-bold">{headerLogo.logo}</h1>
                <form action="">
                    <SearchInput
                        isStyle={true}
                        id="search"
                        type="text"
                        top="top-0"
                    />
                </form>
                <Button
                    isIcon="/images/header-write.svg"
                    alt="レシピを書く"
                    text="レシピを書く"
                    color={buttonColors.bgOrange}
                    width=""
                    type="button"
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
                        type="button"
                    />
                </div>
                <div className="grid grid-cols-header-column gap-5">
                    <form action="">
                        <SearchInput
                            isStyle={true}
                            id="search"
                            type="text"
                            top="top-0"
                        />
                    </form>
                    <MenuButton open={open} menuOpen={menuOpen} />
                </div>
            </div>
            <div
                onClick={menuOpen}
                className={`inset-0 ${
                    open.sideOpen ? "fixed z-50 bg-gray-opacity" : "z-0"
                }`}
            >
                <Navbar open={open} />
            </div>
        </header>
    );
};
