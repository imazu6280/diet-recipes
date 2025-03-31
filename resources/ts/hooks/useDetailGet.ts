import { useEffect, useState } from "react";
import { recipePfcResponse, recipeSchema } from "../type/recipes";
import { useParams } from "react-router-dom";

export const useDetailGet = () => {
    const { id } = useParams<string>();
    const [recipesDetail, setRecipesDetail] = useState<recipeSchema>();
    const [recipePfc, setRecipePfc] = useState<recipePfcResponse>([
        { name: "たんぱく質", pfc: 0 },
        { name: "脂質", pfc: 0 },
        { name: "炭水化物", pfc: 0 },
    ]);

    const GetRecipesDetailApi = async (id: number) => {
        try {
            const res = await fetch(`/api/recipes/${id}`);
            const json: recipeSchema = await res.json();

            setRecipesDetail(json);

            const totalPfc = json.ingredients.reduce(
                (acc, ingredient) => {
                    const values = [
                        ingredient.pivot.protein,
                        ingredient.pivot.fat,
                        ingredient.pivot.carbs,
                    ];

                    values.forEach((value, index) => {
                        acc[index].pfc += value ?? 0;
                    });

                    return acc;
                },
                [
                    { name: "たんぱく質", pfc: 0 },
                    { name: "脂質", pfc: 0 },
                    { name: "炭水化物", pfc: 0 },
                ]
            );

            setRecipePfc(totalPfc);
        } catch (error) {
            console.error("recipe detail get error", error);
        }
    };

    useEffect(() => {
        if (id) {
            GetRecipesDetailApi(Number(id));
        }
    }, [id]);

    return { recipePfc, recipesDetail, GetRecipesDetailApi };
};
