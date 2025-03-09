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
import { DeleteMenuButton } from "./DeleteMenuButton";
import { headerLogo, sideLink } from "../constants/text";
import { useRecipeCreate } from "../hooks/useRecipeCreate";
import { useRecipeDelete } from "../hooks/useRecipeDelete";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Header = () => {
    const { open, menuOpen, toggleDeleteOpen }: SideMenuType = useMenu();
    const { createInputValue, favoriteToggleBtn } = useRecipeCreate();
    const { deleteHandleSubmit } = useRecipeDelete();
    const location = useLocation();
    const isLocation =
        location.pathname === "/create" || location.pathname.includes("/edit/");
    const isLocationEdit = location.pathname.includes("/edit/");
    const isLocationRecipes = location.pathname.includes("/recipes/");

    const recipeDeleteId = useSelector((state: RootState) => state.id.id);

    return isLocation ? (
        <header className="sticky top-0 z-30 md:shadow-gray">
            <div className="p-2 flex justify-end gap-x-4 bg-white z-10 md:hidden">
                {isLocationEdit && (
                    <Button
                        isIcon="/images/trash-red.svg"
                        alt="削除"
                        text="削除"
                        color={buttonColors.red}
                        width="w-40"
                        type="button"
                        recipeDeleteId={recipeDeleteId}
                        deleteHandleSubmit={deleteHandleSubmit}
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
                                    recipeDeleteId={recipeDeleteId}
                                    deleteHandleSubmit={deleteHandleSubmit}
                                />
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    ) : (
        <header className="sticky top-0 z-50 md:shadow-gray">
            <div
                className={`p-2 flex bg-white z-10 md:hidden ${
                    !isLocationRecipes ? "justify-end" : "justify-between"
                }`}
            >
                {isLocationRecipes && (
                    <SearchInput
                        isStyle={true}
                        id="search"
                        type="text"
                        top="top-1/4"
                        width="w-header-search"
                    />
                )}
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
                        width="w-full"
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
                            width="w-full"
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
