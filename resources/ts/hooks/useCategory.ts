import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useLocation, useParams } from "react-router-dom";

export const useCategory = () => {
    const [categoryInputValue, setCategoryInputValue] =
        useState<GetRecipesResponse>();
    const { id } = useParams();
    const location = useLocation();

    const categoryGetRecipe = async () => {
        try {
            const res = await fetch(`/api/recipes/category/${id}`);
            const json = await res.json();

            setCategoryInputValue(json);

            console.log("API response:", [json]);
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
