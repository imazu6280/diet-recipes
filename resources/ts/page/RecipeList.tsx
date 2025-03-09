import { useEffect } from "react";
import { Button } from "../component/Button";
import { SearchInput } from "../component/SearchInput";
import { buttonColors } from "../constants/buttonColors";
import { useMenu } from "../hooks/useMenu";
import { useSearch } from "../hooks/useSearch";

export const RecipeList = () => {
    const { open, toddleSearchOpen } = useMenu();
    const { searchList, searchGetRecipe } = useSearch();

    // const searchParams = new URLSearchParams(location.search).get("search");

    // useEffect(() => {
    //     if (searchParams) {
    //         searchGetRecipe(searchParams);
    //     }
    // }, [location.search]);

    return (
        <div className="mx-auto pc_lg:w-inner pc_lg:max-w-wrapper ">
            <ul className="flex md:w-full md:grid md:grid-cols-2 md:bg-white md:text-center md:shadow-gray">
                <li className="p-4 border-b-2 border-orange">新着</li>
                <li className="p-4">お気に入り</li>
            </ul>
            <h2 className="pt-4 text-2xl md:hidden">
                <strong className="pr-1">鶏肉</strong>レシピ
                <span className="pl-1 text-xl text-gray">(111)</span>
            </h2>
            <div className="grid grid-cols-wrapper-column gap-x-6 pt-4 text-xl md:block md:w-inner md:mx-auto">
                <div className="flex flex-col gap-y-4">
                    <p>お気に入りの「鶏肉」レシピ</p>
                    <ul className="flex gap-x-2">
                        <li className="max-w-36 aspect-square rounded-lg">
                            <img src="" alt="" />
                        </li>
                    </ul>
                    <div className="justify-between hidden md:flex">
                        <h2 className="pt-4 text-2xl">
                            <strong className="pr-1">鶏肉</strong>レシピ
                            <span className="pl-1 text-xl">(111)</span>
                        </h2>
                        <Button
                            alt="絞り込み検索"
                            text="絞り込み検索"
                            color={buttonColors.gray}
                            width="w-40"
                            type="button"
                            toddleSearchOpen={toddleSearchOpen}
                        />
                    </div>
                    {searchList.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-list-column grid-areas-desktop rounded-md shadow-black md:grid-cols-md-list-column md:grid-mobile md:bg-white"
                        >
                            <div
                                className="order-2 md:order-1 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url()`,
                                }}
                            ></div>
                            <div className="flex flex-col gap-y-3 p-4 grid-image">
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

                                <div className="flex gap-x-1 grid-content">
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
                        <p className="text-base text-gray">リセットする</p>
                    </div>

                    <form action="" className="flex flex-col gap-y-4">
                        <SearchInput
                            isStyle={false}
                            id="search"
                            type="text"
                            top="top-1/4"
                            width="w-full"
                        />
                        <Button
                            isIcon=""
                            alt=""
                            text="検索"
                            color={buttonColors.bgOrange}
                            width="w-20"
                            type="button"
                        />
                    </form>
                </div>
            </div>
            {open.searchOpen && (
                <div
                    className="flex justify-center items-center inset-0 fixed z-50 bg-gray-opacity"
                    onClick={toddleSearchOpen}
                >
                    <div
                        className="w-inner px-4 py-10 bg-beige z-60 rounded-md shadow-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form
                            action=""
                            className="flex flex-col gap-y-6 w-inner mx-auto"
                        >
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">
                                    <span className="pr-1">鶏肉</span>の絞り込み
                                </h3>
                                <p className="text-base text-gray">
                                    リセットする
                                </p>
                            </div>
                            <SearchInput
                                isStyle={false}
                                id="search"
                                type="text"
                                top="top-1/4"
                                width="w-full"
                            />
                            <Button
                                alt="絞り込み検索"
                                text="絞り込み検索"
                                color={buttonColors.bgOrange}
                                width="w-40 mx-auto"
                                type="button"
                            />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
