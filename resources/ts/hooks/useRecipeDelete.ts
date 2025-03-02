export const useRecipeDelete = () => {
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

                location.href = "/";

                console.log("DELETE success!!", result);
            } catch (error) {
                console.error("DELETE error!!", error);
            }
        }
    };

    return { deleteHandleSubmit };
};
