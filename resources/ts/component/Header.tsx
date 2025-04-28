import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { buttonColors } from "../constants/buttonColors";
import { useMenu } from "../hooks/useMenu";
import { SideMenuType } from "../type/sideMenu";
import { MenuButton } from "./MenuButton";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faStar } from "@fortawesome/free-solid-svg-icons";
import { DeleteMenuButton } from "./DeleteMenuButton";
import { useRecipeCreate } from "../hooks/useRecipeCreate";
import { useRecipeDelete } from "../hooks/useRecipeDelete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRecipeList } from "../hooks/useRecipeList";
import { setFavoriteTab } from "../redux/favoriteTabSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { resetFavorite } from "../redux/favoriteToggleSlice";

export const Header = () => {
    const { open, menuOpen, menuClose, toggleDeleteOpen }: SideMenuType =
        useMenu();
    const { favoriteToggleBtn } = useRecipeCreate();
    const { deleteHandleSubmit } = useRecipeDelete();
    const { inputValue, handleSearchChange, handleSearchSubmit } =
        useRecipeList();

    const recipeDeleteId = useSelector((state: RootState) => state.id.id);
    const isFavorite = useSelector(
        (state: RootState) => state.favorite.is_favorite
    );
    const dispatch = useDispatch();

    const location = useLocation();
    const isLocation =
        location.pathname === "/create" || location.pathname.includes("/edit/");
    const isLocationEdit = location.pathname.includes("/edit/");
    const isLocationRecipes =
        location.pathname.includes("/recipes") ||
        location.pathname.includes("/recipes/category/");
    const isCreate = location.pathname === "/create";

    useEffect(() => {
        if (isCreate) {
            dispatch(resetFavorite());
        }
    }, [location.pathname]);

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
                    isIcon={faStar}
                    alt="お気に入り"
                    text="お気に入り"
                    color={`${
                        isFavorite === 0
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
                <Link to="/">
                    <h1
                        className={`${isLocation ? "w-full max-w-40" : "w-48"}`}
                    >
                        <img src="/images/logo03.png" alt="" />
                    </h1>
                </Link>
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
                                {isCreate ? (
                                    <Link to="/">
                                        <li className="flex items-center gap-x-2 w-40 px-4 py-2 text-gray-opacity border-gray-opacity border-1 bg-white z-50 first:rounded-t-modal last-of-type:rounded-b-modal hover:bg-beige">
                                            戻る
                                        </li>
                                    </Link>
                                ) : (
                                    <DeleteMenuButton
                                        key=""
                                        text="削除"
                                        image="/images/trash.svg"
                                        index={0}
                                        type=""
                                        recipeDeleteId={recipeDeleteId}
                                        deleteHandleSubmit={deleteHandleSubmit}
                                    />
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    ) : (
        <header className="sticky top-0 z-50 md:shadow-gray">
            <form
                id="recipes-header-search"
                action=""
                onSubmit={(e) => {
                    handleSearchSubmit(e, inputValue);
                    dispatch(setFavoriteTab(false));
                }}
                className={`p-2 flex bg-white z-10 md:hidden ${
                    !isLocationRecipes ? "justify-end" : "justify-between"
                }`}
            >
                {isLocationRecipes && (
                    <SearchInput
                        isStyle={true}
                        id="recipes-header-search"
                        type="text"
                        top="top-1/4"
                        width="w-header-search"
                        value={inputValue}
                        handleSearchChange={handleSearchChange}
                    />
                )}
                <Link to="/create">
                    <Button
                        isIcon="/images/header-write.svg"
                        alt="レシピを書く"
                        text="レシピを書く"
                        color={buttonColors.bgOrange}
                        width=""
                        type="button"
                        formId="recipes-header-search"
                    />
                </Link>
            </form>
            <div className="px-4 py-3 bg-white z-10 hidden tablet_md:grid grid-cols-header-tb-column gap-x-6 items-center">
                <Link to="/">
                    <h1>
                        <img src="/images/logo03.png" alt="" />
                    </h1>
                </Link>
                <form
                    id="header-search"
                    action=""
                    onSubmit={(e) => {
                        handleSearchSubmit(e, inputValue);
                        dispatch(setFavoriteTab(false));
                    }}
                >
                    <SearchInput
                        isStyle={true}
                        id="header-search"
                        type="text"
                        top="top-0"
                        width="w-full"
                        value={inputValue}
                        handleSearchChange={handleSearchChange}
                    />
                </form>
                <Link to="/create">
                    <Button
                        isIcon="/images/header-write.svg"
                        alt="レシピを書く"
                        text="レシピを書く"
                        color={buttonColors.bgOrange}
                        width=""
                        type="button"
                        formId="header-search"
                    />
                </Link>
                <MenuButton open={open} menuOpen={menuOpen} />
            </div>
            <div className="px-4 py-3 bg-white z-10 hidden sm:flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <h1 className="w-44">
                            <img src="/images/logo03.png" alt="" />
                        </h1>
                    </Link>
                    <Link to="/create">
                        <Button
                            isIcon="/images/header-write.svg"
                            alt="レシピを書く"
                            text="レシピを書く"
                            color={buttonColors.bgOrange}
                            width=""
                            type="button"
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-header-column gap-5 items-center">
                    <form
                        id="no-click-search"
                        action=""
                        onSubmit={(e) => {
                            handleSearchSubmit(e, inputValue);
                            dispatch(setFavoriteTab(false));
                        }}
                    >
                        <SearchInput
                            isStyle={true}
                            id="no-click-search"
                            type="text"
                            top="top-0"
                            width="w-full"
                            value={inputValue}
                            handleSearchChange={handleSearchChange}
                        />
                    </form>
                    <MenuButton open={open} menuOpen={menuOpen} />
                </div>
            </div>
            <div
                onClick={menuClose}
                className={`inset-0 ${
                    open.sideOpen ? "fixed z-50 bg-gray-opacity" : "z-0"
                }`}
            >
                <Navbar open={open} />
            </div>
        </header>
    );
};
