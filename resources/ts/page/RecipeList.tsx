import { useSearchParams } from "react-router-dom";
import { Button } from "../component/Button";
import { SearchInput } from "../component/SearchInput";
import { buttonColors } from "../constants/buttonColors";
import { useMenu } from "../hooks/useMenu";
import { useSearch } from "../hooks/useSearch";
import { useEffect, useState } from "react";

export const RecipeList = () => {
    const { open, toggleSearchOpen } = useMenu();
    const {
        searchList,
        isFavoriteTab,
        handleSearchChange,
        handleResetChange,
        handleSearchSubmit,
        searchGetRecipe,
    } = useSearch();
    const [searchParams, setSearchParams] = useSearchParams();

    const newParams = new URLSearchParams(searchParams);

    useEffect(() => {
        searchGetRecipe();
    }, [searchParams]);

    return (
        <div className="mx-auto pc_lg:w-inner pc_lg:max-w-wrapper ">
            <ul className="flex md:w-full md:grid md:grid-cols-2 md:bg-white md:text-center md:shadow-gray">
                <li
                    className={`p-4 ${
                        isFavoriteTab ? "" : "border-b-2 border-orange"
                    }`}
                    onClick={() => {
                        newParams.set("favorite", "false");
                        setSearchParams(newParams);
                    }}
                >
                    新着
                </li>
                <li
                    className={`p-4 ${
                        isFavoriteTab ? "border-b-2 border-orange" : ""
                    }`}
                    onClick={() => {
                        newParams.set("favorite", "true");
                        setSearchParams(newParams);
                    }}
                >
                    お気に入り
                </li>
            </ul>
            <h2 className="pt-4 text-2xl md:hidden">
                <strong className="pr-1">鶏肉</strong>レシピ
                <span className="pl-1 text-xl text-gray">(111)</span>
            </h2>
            <div className="grid grid-cols-wrapper-column gap-x-6 pt-4 text-xl md:block md:w-inner md:mx-auto">
                <div className="flex flex-col gap-y-4">
                    {!isFavoriteTab && (
                        <div>
                            <p>お気に入りの「鶏肉」レシピ</p>
                            <ul className="flex gap-x-2">
                                {searchList.map((item) => (
                                    <li className="max-w-36 aspect-square rounded-lg">
                                        <img src={item.thumbnail} alt="" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="justify-between hidden md:flex">
                        <h2 className="pt-4 text-2xl">
                            {isFavoriteTab ? <span>お気に入りの</span> : ""}
                            <strong className="pr-1">鶏肉</strong>レシピ
                            <span className="pl-1 text-xl">
                                ({searchList.length})
                            </span>
                        </h2>
                        <Button
                            alt="絞り込み検索"
                            text="絞り込み検索"
                            color={buttonColors.gray}
                            width="w-40"
                            type="button"
                            toggleSearchOpen={toggleSearchOpen}
                        />
                    </div>
                    {searchList.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-list-column grid-desktop rounded-md shadow-black md:grid-cols-md-list-column md:grid-mobile md:bg-white"
                        >
                            <div
                                className="grid-image bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url()`,
                                }}
                            ></div>
                            <div className="flex flex-col gap-y-3 p-4 grid-content">
                                <h3 className="text-xl font-semibold">
                                    {item.name}
                                </h3>
                                <ul className="text-sm">
                                    {item.ingredients.map((ingredient) => (
                                        <li key={ingredient.id}>
                                            {ingredient.name}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex gap-x-1">
                                    <img src="/images/people.svg" alt="" />
                                    <p className="text-sm">2人前</p>
                                </div>
                                <p className="pt-1 text-sm">コメント</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sticky top-20 flex flex-col gap-4 h-fit overflow-visible md:hidden">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">絞り込み機能</h3>
                        <p
                            onClick={handleResetChange}
                            className="text-base text-gray"
                        >
                            リセットする
                        </p>
                    </div>

                    <form
                        id="filter-search"
                        action=""
                        className="flex flex-col gap-y-4"
                    >
                        <SearchInput
                            isStyle={false}
                            id="filter-search"
                            type="text"
                            top="top-1/4"
                            width="w-full"
                            handleSearchChange={handleSearchChange}
                        />
                        <Button
                            isIcon=""
                            alt=""
                            text="検索"
                            color={buttonColors.bgOrange}
                            width="w-20"
                            type="submit"
                            formId="filter-search"
                        />
                    </form>
                </div>
            </div>
            {open.searchOpen && (
                <div
                    className="flex justify-center items-center inset-0 fixed z-50 bg-gray-opacity"
                    onClick={toggleSearchOpen}
                >
                    <div
                        className="w-inner px-4 py-10 bg-beige z-60 rounded-md shadow-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form
                            action=""
                            id="sort"
                            onSubmit={handleSearchSubmit}
                            className="flex flex-col gap-y-6 w-inner mx-auto"
                        >
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">
                                    <span className="pr-1">鶏肉</span>の絞り込み
                                </h3>
                                <p
                                    onClick={handleResetChange}
                                    className="text-base text-gray"
                                >
                                    リセットする
                                </p>
                            </div>
                            <SearchInput
                                isStyle={false}
                                id="search"
                                type="text"
                                top="top-1/4"
                                width="w-full"
                                handleSearchChange={handleSearchChange}
                            />
                            <Button
                                alt="絞り込み検索"
                                text="絞り込み検索"
                                color={buttonColors.bgOrange}
                                width="w-40 mx-auto"
                                type="submit"
                                formId="sort"
                            />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
