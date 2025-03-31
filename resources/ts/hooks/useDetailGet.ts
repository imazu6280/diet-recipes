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

            // PFC計算処理
            const totalPfc = json.ingredients.reduce(
                (acc, ingredient) => {
                    // ingredientオブジェクトを配列に
                    const values = [
                        ingredient.pivot.protein,
                        ingredient.pivot.fat,
                        ingredient.pivot.carbs,
                    ];

                    // 配列をループしてpfcに格納
                    values.forEach((value, index) => {
                        acc[index].pfc += value ?? 0;
                    });

                    return acc; //次のループに戻る
                },
                [
                    // 初期値
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
