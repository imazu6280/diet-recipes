import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { categoryType } from "../type/category"
import { popularRecipesType } from "../type/recipes"
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
} from "@fortawesome/free-solid-svg-icons"

const popularRecipes: popularRecipesType = [
    { id: 0, recipe: "大根" },
    { id: 1, recipe: "大根" },
    { id: 2, recipe: "大根" },
]

const category: categoryType = [
    { id: 0, category: "野菜", icon: faCarrot, color: "text-green" },
    { id: 1, category: "お肉", icon: faDrumstickBite, color: "text-red" },
    { id: 2, category: "魚介", icon: faFish, color: "text-blue" },
    { id: 3, category: "たまご", icon: faEgg, color: "text-yellow" },
    { id: 4, category: "サラダ", icon: faLeaf, color: "text-green" },
    { id: 5, category: "スープ", icon: faBowlFood, color: "text-red" },
    { id: 6, category: "ごはんもの", icon: faHamburger, color: "text-blue" },
    { id: 7, category: "麺", icon: faUtensils, color: "text-yellow" },
    { id: 8, category: "お弁当", icon: faBox, color: "text-charcoal" },
    { id: 9, category: "パン", icon: faBreadSlice, color: "text-yellow" },
    { id: 10, category: "お菓子", icon: faCookieBite, color: "text-red" },
    { id: 11, category: "おもてなし", icon: faUtensils, color: "text-red" },
]

export const Top = () => {
    return (
        <div className="w-inner mx-auto">
            <div className="flex flex-col gap-y-6">
                <h1 className="text-3xl font-bold text-center">DIET RECIPES</h1>
                <form action="">
                    <div className="flex justify-center gap-2 mx-auto">
                        <input
                            type="text"
                            className="relative w-80 p-2 rounded-lg border border-black before:content-search-icon before:absolute left-1"
                            placeholder="使いたい食材は？"
                        />
                        <button className="py-2 px-4 text-white bg-orange rounded-lg ">検索</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col gap-y-6">
                <div>
                    <h2 className="pt-6 text-lg text-black font-semibold">よく使う減量レシピ</h2>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-2">
                        {popularRecipes.map((item) => (
                            <li
                                key={item.id}
                                className="pt-20 pb-2 px-4 text-white shadow-black bg-gray rounded-lg"
                            >
                                {item.recipe}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="t-6 text-lg text-black font-semibold">登録レシピ一覧</h2>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-2">
                        {popularRecipes.map((item) => (
                            <li key={item.id} className="bg-white shadow-black rounded-lg">
                                <div className="pt-20 bg-gray rounded-t-lg">
                                    <p className="p-2 text-white">{item.recipe}</p>
                                </div>
                                <div className="flex flex-col gap-y-1 mx-2 mt-6 mb-2">
                                    <p className="text-xs text-gray">詳細画像</p>
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
                    <h2 className="t-6 text-lg text-black font-semibold">カテゴリ</h2>
                    <ul className="grid grid-cols-4 gap-4 mt-2">
                        {category.map((item) => (
                            <li
                                key={item.id}
                                className="py-4 pl-4 pr-1 bg-white shadow-black rounded-lg"
                            >
                                <p className="p-2">
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className={`text-2xl mr-2 ${item.color}`}
                                    />
                                    {item.category}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
