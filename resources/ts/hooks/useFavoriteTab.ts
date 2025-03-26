import { useState } from "react";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

export const useFavoriteTab = () => {
    const [isFavoriteTab, setIsFavoriteTab] = useState(false);
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const location = useLocation();
    const navigate = useNavigate();

    const handleFavoriteTab = () => {
        if (!isFavoriteTab) {
            if (location.pathname.includes("category")) {
                navigate(`/recipes/category/${id}/favorites`);
            } else {
                navigate(`/recipes/favorites?${params.toString()}`);
            }
        } else {
            if (location.pathname.includes("category")) {
                navigate(`/recipes/category/${id}`);
            } else {
                navigate(`/recipes?${params.toString()}`);
            }
        }
    };

    return { isFavoriteTab, setIsFavoriteTab, handleFavoriteTab };
};
