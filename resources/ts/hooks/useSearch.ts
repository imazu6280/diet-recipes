import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useLocation, useNavigate } from "react-router-dom";

export const useSearch = () => {
    const [searchList, setSearchList] = useState<GetRecipesResponse>([]);
    const [search, setSearch] = useState<string>("");
    const location = useLocation();
    const navigate = useNavigate();

    // const searchParams = new URLSearchParams(location.search).get("search");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Search input changed:", e.target.value);
        setSearch(e.target.value);
    };

    // const handleSearchSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Search submitted with query:", search);
    //     searchGetRecipe(search);
    // };

    const searchGetRecipe = async (
        e: React.FormEvent<HTMLFormElement>,
        query: string
    ) => {
        e.preventDefault();
        console.log("Fetching recipes for query:", query);
        try {
            const res = await fetch(`/api/recipes?search=${query}`);
            const json = await res.json();

            setSearchList(json);

            navigate(`/recipes?search=${encodeURIComponent(query)}`);
            console.log("API response:", json); // ここでレスポンスを確認
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    // useEffect(() => {
    //     if (searchParams) {
    //         searchGetRecipe(searchParams);
    //     }
    // }, [location.search]);

    return {
        search,
        searchList,
        handleSearchChange,
        // handleSearchSubmit,
        searchGetRecipe,
    };
};
