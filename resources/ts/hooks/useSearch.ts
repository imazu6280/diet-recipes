import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useSearch = () => {
    const [searchList, setSearchList] = useState<GetRecipesResponse>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFavoriteTab, setIsFavoriteTab] = useState(false);

    const query = searchParams.get("search") ?? "";
    const queryFavorite = searchParams.get("favorite") === "true";

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ search: e.target.value });
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

        const targetUrl = `/recipes?search=${encodeURIComponent(query)}`;
        location.href = targetUrl;
    };

    // const handleFavoriteTab = () => {
    //     const query = searchParams.get("search") ?? "";

    //     setIsFavoriteTab(true);

    //     setSearchParams({ favorite: "true" });

    //     const queryFavorite = searchParams.get("favorite") === "true";

    //     const targetUrl = `/recipes?search=${encodeURIComponent(
    //         query
    //     )}&favorite=${encodeURIComponent(queryFavorite)}`;
    //     location.href = targetUrl;
    // };

    const searchGetRecipe = async () => {
        // const query = searchParams.get("search") ?? "";
        // const queryFavorite = searchParams.get("favorite") === "true";
        console.log("queryFavorite2", queryFavorite);

        try {
            if (queryFavorite) {
                const res = await fetch(
                    `/api/recipes?search=${encodeURIComponent(
                        query
                    )}&favorite=${encodeURIComponent(queryFavorite)}`
                );
                const json = await res.json();

                setSearchList(json);

                setIsFavoriteTab(true);

                console.log("API response:", json);
            } else {
                const res = await fetch(
                    `/api/recipes?search=${encodeURIComponent(query)}`
                );
                const json = await res.json();
                setSearchList(json);

                setIsFavoriteTab(false);

                console.log("API response:", json);
            }
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    return {
        searchList,
        searchParams,
        isFavoriteTab,
        handleResetChange,
        handleSearchChange,
        handleSearchSubmit,
        setIsFavoriteTab,
        // handleFavoriteTab,
        searchGetRecipe,
    };
};
