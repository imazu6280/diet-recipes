import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useSearch } from "./useSearch";
import { useFavoriteTab } from "./useFavoriteTab";

export const useCategory = () => {
    const [categoryInputValue, setCategoryInputValue] =
        useState<GetRecipesResponse>();
    const [categoryFavoritesValue, setCategoryFavoritesValue] =
        useState<GetRecipesResponse>();
    const { id } = useParams();
    const location = useLocation();
    // const [favoritesUrl, setFavoritesUrl] = useState(
    //     location.pathname.includes("favorites")
    // );
    // const searchParams = new URLSearchParams(location.search);
    // const [searchParams] = useSearchParams();
    const favoritesUrl = location.pathname.includes("favorites");

    const categoryGetRecipe = async () => {
        console.log({ id });

        try {
            const [resList, resFavoriteList] = await Promise.all([
                fetch(`/api/recipes/category/${id}`),
                fetch(`/api/recipes/category/${id}/favorites`),
            ]);
            // const res = await fetch(`/api/recipes/category/${id}`);
            const listJson = await resList.json();
            const favoriteListJson = await resFavoriteList.json();

            setCategoryInputValue(listJson);
            setCategoryFavoritesValue(favoriteListJson);

            console.log("no API response:", [listJson, favoriteListJson]);
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    const categoryFavoritesGetRecipe = async () => {
        try {
            const res = await fetch(`/api/recipes/category/${id}/favorites`);
            const json = await res.json();

            setCategoryInputValue(json);
            console.log("categoryInputValue", categoryInputValue);
            console.log("yes favo", json);
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    useEffect(() => {
        if (location.pathname.includes("/recipes/category/")) {
            categoryGetRecipe();
        }
    }, []);

    return {
        categoryInputValue,
        categoryFavoritesValue,
        categoryGetRecipe,
        categoryFavoritesGetRecipe,
    };
};
