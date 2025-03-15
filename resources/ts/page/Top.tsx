import { categoryType } from "../type/category";
import { SearchInput } from "../component/SearchInput";
import { Button } from "../component/Button";
import { useTopGet } from "../hooks/useTopGet";
import { buttonColors } from "../constants/buttonColors";
import { Link } from "react-router-dom";
import { useDetailGet } from "../hooks/useDetailGet";
import { useSearch } from "../hooks/useSearch";

const category: categoryType = [
    { id: 0, category: "野菜", icon: "images/image02.png" },
    { id: 1, category: "お肉", icon: "images/image03.png" },
    { id: 2, category: "魚介", icon: "images/image04.png" },
    {
        id: 3,
        category: "たまご",
        icon: "images/image05.png",
    },
    {
        id: 4,
        category: "サラダ",
        icon: "images/image06.png",
    },
    {
        id: 5,
        category: "スープ",
        icon: "images/image07.png",
    },
    {
        id: 6,
        category: "ごはんもの",
        icon: "images/image08.png",
    },
    { id: 7, category: "麺", icon: "images/image09.png" },
    {
        id: 8,
        category: "お弁当",
        icon: "images/image10.png",
    },
    {
        id: 9,
        category: "パン",
        icon: "images/image11.png",
    },
    {
        id: 10,
        category: "お菓子",
        icon: "images/image12.png",
    },
    {
        id: 11,
        category: "おもてなし",
        icon: "images/image13.png",
    },
];

export const Top = () => {
    const { recipes, favoriteRecipes } = useTopGet();
    const { GetRecipesDetailApi } = useDetailGet();
    const { inputValue, handleSearchChange, handleSearchSubmit } = useSearch();

    return (
        <div className="w-inner mx-auto">
            <div className="flex flex-col gap-y-6 md:hidden">
                <h1 className="text-3xl font-bold text-center">DIET RECIPES</h1>
                <form action="" onSubmit={handleSearchSubmit}>
                    <div className="flex justify-center gap-2 mx-auto">
                        <SearchInput
                            isStyle={false}
                            id="search"
                            type="text"
                            top="top-1/4"
                            width="w-80"
                            value={inputValue}
                            handleSearchChange={handleSearchChange}
                        />
                        <Button
                            isIcon=""
                            alt=""
                            text="検索"
                            color={buttonColors.bgOrange}
                            width=""
                            type="submit"
                        />
                    </div>
                </form>
            </div>
            <div className="flex flex-col gap-y-6">
                <div>
                    <h2 className="pt-6 text-black font-semibold">
                        よく使う減量レシピ
                    </h2>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-4 sm:grid-cols-2 sm:gap-y-4">
                        {favoriteRecipes.map((item) => (
                            <Link
                                to={`show/${item.id}`}
                                key={item.id}
                                onClick={() => GetRecipesDetailApi(item.id)}
                            >
                                <li
                                    className="pt-16 pb-2 px-4 text-white font-bold shadow-black rounded-lg bg-top bg-cover bg-no-repeat"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.thumbnail})`,
                                    }}
                                >
                                    {item.name}
                                    <span className="block pt-1 text-xs font-light text-white">
                                        {item.calories}カロリー
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="t-6 text-lg text-black font-semibold">
                        登録レシピ一覧
                    </h2>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-4 tablet_md:grid-cols-3 sm:grid-cols-1 sm:gap-y-4">
                        {recipes.map((item) => (
                            <Link to={`show/${item.id}`} key={item.id}>
                                <li
                                    key={item.id}
                                    className="bg-white shadow-black rounded-lg"
                                >
                                    <div
                                        className="pt-20 pb-4 px-4 rounded-t-lg bg-top bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${item.thumbnail})`,
                                        }}
                                    >
                                        <p className="text-white font-bold">
                                            {item.name}
                                        </p>
                                        <p className="pt-0.5 text-xs font-light text-white">
                                            {item.calories}カロリー
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-y-1 mx-2 py-4">
                                        <p className="flex gap-x-1 text-xs text-gray">
                                            <svg
                                                width="17"
                                                height="16"
                                                viewBox="0 0 17 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.997 7.333V11.333C14.997 12.0403 14.716 12.7187 14.2159 13.2189C13.7157 13.719 13.0373 14 12.33 14H4.33001C3.62268 14 2.94432 13.719 2.44416 13.2189C1.944 12.7187 1.66301 12.0403 1.66301 11.333V5.333C1.66301 4.597 2.26001 4 2.99701 4H4.28301C4.72901 4 5.14501 3.777 5.39301 3.406L5.93401 2.594C6.18201 2.223 6.59801 2 7.04401 2H9.66401"
                                                    stroke="#939290"
                                                    strokeWidth="1.3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M13.663 1.33301V5.33301M11.663 3.33301H15.663M5.48102 8.69901L8.07602 11.402C8.21502 11.546 8.44602 11.546 8.58402 11.402L11.179 8.69901C11.497 8.36775 11.6704 7.92374 11.661 7.46465C11.6516 7.00556 11.4603 6.569 11.129 6.25101C10.7978 5.93301 10.3537 5.75963 9.89466 5.76901C9.43557 5.77839 8.99901 5.96975 8.68102 6.30101L8.33002 6.66701L7.97902 6.30001C7.66102 5.96875 7.22446 5.77739 6.76537 5.76801C6.30628 5.75863 5.86227 5.93201 5.53102 6.25001C5.19976 6.568 5.0084 7.00456 4.99902 7.46365C4.98964 7.92274 5.16302 8.36675 5.48102 8.69801V8.69901Z"
                                                    stroke="#939290"
                                                    strokeWidth="1.3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            詳細画像
                                        </p>
                                        <ul className="grid grid-cols-6 gap-x-2">
                                            {item.steps.map((step) => (
                                                <li
                                                    key={step.id}
                                                    className="aspect-square rounded-lg"
                                                >
                                                    <img
                                                        src={step.thumbnail}
                                                        alt=""
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="t-6 text-lg text-black font-semibold">
                        カテゴリ
                    </h2>
                    <ul className="grid grid-cols-4 gap-4 mt-4 bg-white rounded-lg md:grid-cols-3 md:gap-0 md:p-3">
                        {category.map((item) => (
                            <li
                                key={item.id}
                                className="py-4 pl-4 pr-1 bg-white shadow-black rounded-lg md:p-0 md:text-sm md:shadow-none  md:border-b md:border-gray md:rounded-none"
                            >
                                <p className="flex gap-x-2 items-center p-2 tb:px-0 tb:text-sm">
                                    <span className="w-6 mr-1.5">
                                        <img src={item.icon} alt="" />
                                    </span>
                                    {item.category}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
