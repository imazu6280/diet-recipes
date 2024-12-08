import { popularRecipesType } from "./type/recipes"

const popularRecipes: popularRecipesType = [
    { id: 0, recipe: "大根" },
    { id: 2, recipe: "大根" },
    { id: 3, recipe: "大根" },
]

export const Top = () => {
    return (
        <div className="w-inner mx-auto">
            <h1 className="text-3xl font-bold text-center">DIET RECIPES</h1>
            <form action="">
                <div className="flex justify-center gap-2 w-1/3 mx-auto mt-4">
                    <input
                        type="text"
                        className="relative w-80 p-2 rounded-lg border border-black before:content-search-icon before:absolute left-1"
                        placeholder="使いたい食材は？"
                    />
                    <button className="py-2 px-4 text-white bg-orange rounded-lg border border-black">
                        検索
                    </button>
                </div>
            </form>
            <h2 className="text-lg text-black font-semibold">よく使う減量レシピ</h2>
            <ul className="grid grid-cols-4 gap-x-4 gap-y-2 mt-2">
                {popularRecipes.map((item) => (
                    <li key={item.id} className="py-12 text-white bg-gray rounded-lg">
                        {item.recipe}
                    </li>
                ))}
            </ul>
        </div>
    )
}
