import { useEffect, useState } from "react";
import { recipeSchema } from "../type/recipes";
import { GetStepsResponse } from "../type/card";
import { useParams } from "react-router-dom";

export const useDetailGet = () => {
    const { id } = useParams<string>();
    const [recipesDetail, setRecipesDetail] = useState<recipeSchema>();

    const GetRecipesDetailApi = async (id: number) => {
        try {
            const res = await fetch(`/api/recipes/${id}`);
            const json: recipeSchema = await res.json();

            setRecipesDetail(json);
        } catch (error) {
            console.error("recipe detail get error", error);
        }
    };

    useEffect(() => {
        if (id) {
            GetRecipesDetailApi(Number(id));
        }
    }, [id]);

    return { recipesDetail, GetRecipesDetailApi };
};
