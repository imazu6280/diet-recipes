import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearch = () => {
    const [searchList, setSearchList] = useState<GetRecipesResponse>([]);
    // const [search, setSearch] = useState<string>("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Search input changed:", e.target.value);
        setSearchParams((prev) => {
            prev.set("search", e.target.value);
            return prev;
        });
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchParams.get("search") ?? "";
        navigate(`/recipes?search=${encodeURIComponent(query)}`);
    };

    const searchGetRecipe = async () => {
        const query = searchParams.get("search") ?? "";
        console.log(query);
        try {
            const res = await fetch(
                `/api/recipes?search=${encodeURIComponent(query)}`
            );
            const json = await res.json();

            setSearchList(json);
            console.log("API response:", json); // ここでレスポンスを確認
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    useEffect(() => {
        searchGetRecipe();
    }, [searchParams]);

    return {
        // search,
        searchList,
        handleSearchChange,
        handleSearchSubmit,
        searchGetRecipe,
    };
};
