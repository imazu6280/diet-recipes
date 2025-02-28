import { useParams } from "react-router-dom";

export const useRecipeDelete = () => {
    const deleteHandleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement>,
        id: number
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

                // location.href = "/";

                console.log("DELETE success!!", result);
            } catch (error) {
                console.error("DELETE error!!", error);
            }
        }
    };

    return { deleteHandleSubmit };
};
