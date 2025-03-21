import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
    const [searchList, setSearchList] = useState<GetRecipesResponse>([]);
    const [searchFavoriteList, setSearchFavoriteList] =
        useState<GetRecipesResponse>([]);
    const [inputValue, setInputValue] = useState("");
    const [isFavoriteTab, setIsFavoriteTab] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFavorite = searchParams.get("favorite") === "true";

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleResetChange = () => {
        setInputValue("");
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setSearchParams({ search: inputValue });

        const targetUrl = `/recipes?search=${encodeURIComponent(inputValue)}`;
        location.href = targetUrl;
    };

    const searchGetRecipe = async () => {
        try {
            if (queryFavorite) {
                const res = await fetch(
                    `/api/recipes?search=${encodeURIComponent(
                        inputValue
                    )}&favorite=${encodeURIComponent(queryFavorite)}`
                );
                const json = await res.json();

                setSearchList(json);
                setIsFavoriteTab(true);

                console.log("API response:", json);
            } else {
                const [resList, resFavoriteList] = await Promise.all([
                    fetch(
                        `/api/recipes?search=${encodeURIComponent(inputValue)}`
                    ),
                    fetch(
                        `/api/recipes?search=${encodeURIComponent(
                            inputValue
                        )}&favorite=true`
                    ),
                ]);
                const listJson = await resList.json();
                const favoriteListJson = await resFavoriteList.json();

                setSearchList(listJson);
                setSearchFavoriteList(favoriteListJson);
                setIsFavoriteTab(false);

                console.log("API response:", [listJson, favoriteListJson]);
            }
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    useEffect(() => {
        // if (location.pathname.includes("search")) {
        searchGetRecipe();
        // }
    }, [searchParams]);

    return {
        searchList,
        searchFavoriteList,
        inputValue,
        searchParams,
        isFavoriteTab,
        handleResetChange,
        handleSearchChange,
        handleSearchSubmit,
        setIsFavoriteTab,
        searchGetRecipe,
    };
};
