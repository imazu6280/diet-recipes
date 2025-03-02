import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";

export const useTopGet = () => {
    const [recipes, setRecipes] = useState<GetRecipesResponse>([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState<GetRecipesResponse>(
        []
    );

    const GetRecipesAllApi = async () => {
        try {
            const [recipesRes, favoritesRes] = await Promise.all([
                fetch("/api/recipes"),
                fetch("/api/recipes/favorites"),
            ]);

            const recipesData = await recipesRes.json();
            const favoritesData = await favoritesRes.json();

            setRecipes(recipesData);
            setFavoriteRecipes(favoritesData);
        } catch (error) {
            console.error("recipe get error", error);
        }
    };

    useEffect(() => {
        GetRecipesAllApi();
    }, []);

    return { favoriteRecipes, recipes, setRecipes, setFavoriteRecipes };
};
