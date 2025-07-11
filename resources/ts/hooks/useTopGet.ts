import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { GetCategoryResponse } from "../type/category";

type DataState = {
    recipes: GetRecipesResponse;
    favoriteRecipes: GetRecipesResponse;
    categories: GetCategoryResponse;
};

export const useTopGet = () => {
    const [recipeData, setRecipeData] = useState<DataState>({
        recipes: [],
        favoriteRecipes: [],
        categories: [],
    });

    const GetRecipesAllApi = async () => {
        try {
            const res = await Promise.all([
                fetch("/api/recipes"),
                fetch("/api/recipes/favorites"),
                fetch("/api/recipes/categories"),
            ]);

            const [recipesRes, favoritesRes, categoriesRes] = await Promise.all(
                res.map((res) => res.json())
            );

            setRecipeData({
                recipes: recipesRes,
                favoriteRecipes: favoritesRes,
                categories: categoriesRes,
            });
        } catch (error) {
            console.error("recipe get error", error);
        }
    };

    useEffect(() => {
        GetRecipesAllApi();
    }, []);

    return { recipeData };
};
