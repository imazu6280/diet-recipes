import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearch = () => {
    const [searchList, setSearchList] = useState<GetRecipesResponse>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFavoriteTab, setIsFavoriteTab] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("search", e.target.value);
            return newParams;
        });
    };

    const handleResetChange = () => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("search", "");
            return newParams;
        });
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setIsFavoriteTab(false);
        console.log({ isFavoriteTab });

        const query = searchParams.get("search") ?? "";
        const targetUrl = `/recipes?search=${encodeURIComponent(query)}`;
        location.href = targetUrl;
    };

    const handleFavoriteTab = async () => {
        const query = searchParams.get("search") ?? "";

        setIsFavoriteTab(true);

        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("favorite", "true");
            return newParams;
        });

        const queryFavorite = searchParams.get("favorite") === "true";

        const targetUrl = `/recipes?search=${encodeURIComponent(
            query
        )}&favorite=${encodeURIComponent(queryFavorite)}`;
        location.href = targetUrl;
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

            console.log("API response:", json);
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    const searchFavoriteRecipe = async () => {
        const query = searchParams.get("search") ?? "";
        const queryFavorite = searchParams.get("favorite") === "true";
        console.log("queryFavorite", encodeURIComponent(queryFavorite));

        console.log("query", query);

        try {
            const res = await fetch(
                `/api/recipes?search=${encodeURIComponent(
                    query
                )}&favorite=${encodeURIComponent(queryFavorite)}`
            );
            const json = await res.json();

            setSearchList(json);

            console.log("API response:", json);
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    useEffect(() => {
        if (isFavoriteTab) {
            searchFavoriteRecipe();
        } else {
            searchGetRecipe();
        }
    }, []);

    return {
        searchList,
        searchParams,
        isFavoriteTab,
        handleResetChange,
        handleSearchChange,
        handleSearchSubmit,
        handleFavoriteTab,
        searchGetRecipe,
    };
};
