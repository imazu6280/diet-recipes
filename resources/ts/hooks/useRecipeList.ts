import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

export const useRecipeList = () => {
    const [recipeList, setRecipeList] = useState<GetRecipesResponse>([]);
    const [recipeFavoriteList, setRecipeFavoriteList] =
        useState<GetRecipesResponse>([]);
    const [inputValue, setInputValue] = useState("");
    const locations = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const searchQuery = searchParams.get("search") || "";
    const isCategory = locations.pathname.includes("/category");
    const isRecipes = locations.pathname === "/recipes";

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleResetChange = () => {
        setInputValue("");
    };

    const handleSearchSubmit = (e: React.FormEvent, inputValue: string) => {
        e.preventDefault();

        const targetUrl = `/recipes?search=${encodeURIComponent(inputValue)}`;
        navigate(targetUrl);
    };

    const getRecipeList = async () => {
        try {
            let recipeUrl = "";
            let favoriteUrl = "";

            if (isRecipes) {
                recipeUrl = "/api/recipes";
                favoriteUrl = "/api/recipes/favorites";
            } else if (isCategory) {
                recipeUrl = `/api/recipes/category/${id}`;
                favoriteUrl = `/api/recipes/category/${id}/favorites`;
            } else {
                recipeUrl = `/api/recipes?search=${encodeURIComponent(
                    searchQuery
                )}`;
                favoriteUrl = `/api/recipes/favorites?search=${encodeURIComponent(
                    searchQuery
                )}`;
            }

            const [resList, resFavoriteList] = await Promise.all([
                fetch(recipeUrl),
                fetch(favoriteUrl),
            ]);
            const listJson = await resList.json();
            const favoriteListJson = await resFavoriteList.json();

            setRecipeList(listJson);
            setRecipeFavoriteList(favoriteListJson);
        } catch (error) {
            console.error("LIST GET error!!", error);
        }
    };

    useEffect(() => {
        if (searchQuery || isCategory || isRecipes) {
            getRecipeList();
        }
    }, [searchQuery]);

    return {
        recipeList,
        recipeFavoriteList,
        inputValue,
        searchParams,
        handleResetChange,
        handleSearchChange,
        handleSearchSubmit,
        getRecipeList,
    };
};
