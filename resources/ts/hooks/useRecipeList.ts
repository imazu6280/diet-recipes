import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { categorySchema } from "../type/category";

type categoryData = {
    categoryList: GetRecipesResponse;
    categoryFavoriteList: GetRecipesResponse;
    categoryName: categorySchema;
};

export const useRecipeList = () => {
    const [recipeList, setRecipeList] = useState<GetRecipesResponse>([]);
    const [recipeFavoriteList, setRecipeFavoriteList] =
        useState<GetRecipesResponse>([]);
    const [categoryData, setCategoryData] = useState<categoryData>({
        categoryList: [],
        categoryFavoriteList: [],
        categoryName: { id: 0, name: "", icon: "" },
    });
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

            if (searchQuery) {
                recipeUrl = `/api/recipes?search=${encodeURIComponent(
                    searchQuery
                )}`;
                favoriteUrl = `/api/recipes/favorites?search=${encodeURIComponent(
                    searchQuery
                )}`;
            } else {
                recipeUrl = "/api/recipes";
                favoriteUrl = "/api/recipes/favorites";
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

    const getCategoryList = async () => {
        try {
            const [resList, resFavoriteList, resCategoryName] =
                await Promise.all([
                    fetch(`/api/recipes/category/${id}`),
                    fetch(`/api/recipes/category/${id}/favorites`),
                    fetch(`/api/recipes/categories/${id}`),
                ]);
            const listJson = await resList.json();
            const favoriteListJson = await resFavoriteList.json();
            const categoryNameJson = await resCategoryName.json();

            setCategoryData({
                categoryList: listJson,
                categoryFavoriteList: favoriteListJson,
                categoryName: categoryNameJson,
            });
        } catch (error) {
            console.error("LIST GET error!!", error);
        }
    };

    useEffect(() => {
        if (isCategory) {
            getCategoryList();
        } else if (searchQuery || isRecipes) {
            getRecipeList();
        }
    }, [searchQuery]);

    return {
        recipeList,
        recipeFavoriteList,
        categoryData,
        inputValue,
        searchParams,
        handleResetChange,
        handleSearchChange,
        handleSearchSubmit,
        getRecipeList,
        getCategoryList,
    };
};
