import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import {
    useLocation,
    useMatch,
    useNavigate,
    useSearchParams,
} from "react-router-dom";

export const useSearch = () => {
    const [searchList, setSearchList] = useState<GetRecipesResponse>([]);
    const [searchFavoriteList, setSearchFavoriteList] =
        useState<GetRecipesResponse>([]);
    const [inputValue, setInputValue] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    // const searchParams = new URLSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const favoriteUrl = useMatch("/favorites");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleResetChange = () => {
        setInputValue("");
    };

    const handleSearchSubmit = (e: React.FormEvent, inputValue: string) => {
        e.preventDefault();

        // setSearchParams({ search: inputValue });

        const targetUrl = `/recipes?search=${encodeURIComponent(inputValue)}`;
        navigate(targetUrl);
    };

    const searchGetRecipe = async () => {
        try {
            const [resList, resFavoriteList] = await Promise.all([
                fetch(`/api/recipes?search=${encodeURIComponent(searchQuery)}`),
                fetch(
                    `/api/recipes/favorites?search=${encodeURIComponent(
                        searchQuery
                    )}`
                ),
            ]);
            const listJson = await resList.json();
            const favoriteListJson = await resFavoriteList.json();

            setSearchList(listJson);
            setSearchFavoriteList(favoriteListJson);
            // setIsFavoriteTab(false);

            console.log("API response:", [listJson, favoriteListJson]);
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    const searchFavoritesGetRecipe = async () => {
        try {
            const res = await fetch(
                `/api/recipes/favorites?search=${encodeURIComponent(
                    searchQuery
                )}`
            );
            const json = await res.json();

            setSearchList(json);
            // setIsFavoriteTab(true);

            console.log("API response:", json);

            // setIsFavoriteTab(false);
        } catch (error) {
            console.error("search GET error!!", error);
        }
    };

    useEffect(() => {
        // if (location.pathname.includes("search")) {
        searchGetRecipe();
        // }
    }, []);

    return {
        searchList,
        searchFavoriteList,
        inputValue,
        searchParams,
        handleResetChange,
        handleSearchChange,
        handleSearchSubmit,
        searchGetRecipe,
        searchFavoritesGetRecipe,
    };
};
