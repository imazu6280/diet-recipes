import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useLocation, useParams } from "react-router-dom";
import { useSearch } from "./useSearch";

export const useCategory = () => {
    const [categoryInputValue, setCategoryInputValue] =
        useState<GetRecipesResponse>();
    const { setIsFavoriteTab } = useSearch();
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const queryFavorite = searchParams.get("favorite") === "true";

    const categoryGetRecipe = async () => {
        try {
            if (queryFavorite) {
                const res = await fetch(
                    `/api/recipes/category/${id}?favorite=true`
                );
                const json = await res.json();

                setCategoryInputValue(json);
                setIsFavoriteTab(true);
            } else {
                const res = await fetch(`/api/recipes/category/${id}`);
                const json = await res.json();

                setCategoryInputValue(json);
                setIsFavoriteTab(false);
            }
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    useEffect(() => {
        if (location.pathname.includes("/recipes/category/")) {
            categoryGetRecipe();
        }
    }, []);

    return { categoryInputValue };
};
