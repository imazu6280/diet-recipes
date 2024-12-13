import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categoryType } from "../type/category";
import { popularRecipesType } from "../type/recipes";
import {
    faCarrot,
    faDrumstickBite,
    faFish,
    faEgg,
    faLeaf,
    faBowlFood,
    faHamburger,
    faUtensils,
    faBox,
    faBreadSlice,
    faCookieBite,
} from "@fortawesome/free-solid-svg-icons";

const popularRecipes: popularRecipesType = [
    { id: 0, recipe: "大根" },
    { id: 1, recipe: "大根" },
    { id: 2, recipe: "大根" },
];

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
    return (
        <div className="w-inner mx-auto">
            <div className="flex flex-col gap-y-6 md:hidden">
                <h1 className="text-3xl font-bold text-center">DIET RECIPES</h1>
                <form action="">
                    <div className="flex justify-center gap-2 mx-auto">
                        <input
                            type="text"
                            className="relative w-80 pr-2 pl-10 rounded-lg border border-black before:content-search-image"
                            placeholder="使いたい食材は？"
                        />
                        <button className="py-2 px-4 text-white bg-orange rounded-lg ">
                            検索
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col gap-y-6">
                <div>
                    <h2 className="pt-6 text-black font-semibold">
                        よく使う減量レシピ
                    </h2>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-4 sm:grid-cols-2 sm:gap-y-4">
                        {popularRecipes.map((item) => (
                            <li
                                key={item.id}
                                className="pt-16 pb-2 px-4 text-white font-bold shadow-black bg-gray rounded-lg"
                            >
                                {item.recipe}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="t-6 text-lg text-black font-semibold">
                        登録レシピ一覧
                    </h2>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-4 tablet_md:grid-cols-3 sm:grid-cols-1 sm:gap-y-4">
                        {popularRecipes.map((item) => (
                            <li
                                key={item.id}
                                className="bg-white shadow-black rounded-lg"
                            >
                                <div className="pt-20 pb-4 px-4 bg-gray rounded-t-lg">
                                    <p className="text-white font-bold">
                                        {item.recipe}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-1 mx-2 mt-6 mb-2">
                                    <p className="text-xs text-gray">
                                        詳細画像
                                    </p>
                                    <ul className="grid grid-cols-6 gap-x-2">
                                        <li className="aspect-square bg-gray rounded-lg"></li>
                                        <li className="aspect-square bg-gray rounded-lg"></li>
                                        <li className="aspect-square bg-gray rounded-lg"></li>
                                        <li className="aspect-square bg-gray rounded-lg"></li>
                                    </ul>
                                </div>
                            </li>
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
                                <p className="flex gap-x-2 p-2 tb:px-0 tb:text-sm">
                                    <p className="w-6 mr-1.5">
                                        <img src={item.icon} alt="" />
                                    </p>
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
