import { useNavigate } from "react-router-dom";

export const useRecipeDelete = () => {
    const navigate = useNavigate();

    const deleteHandleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>,
        id?: number | null
    ) => {
        e.preventDefault();

        const isConfirmed =
            window.confirm("このレシピを削除してよろしいですか？");

        if (isConfirmed) {
            try {
                const res = await fetch(`/api/recipes/${id}`, {
                    method: "DELETE",
                });
                const result = await res.json();

                navigate("/");

                console.log("DELETE success!!", result);
            } catch (error) {
                console.error("DELETE error!!", error);
            }
        }
    };

    return { deleteHandleSubmit };
};
