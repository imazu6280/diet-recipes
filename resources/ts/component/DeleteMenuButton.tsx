type Props = {
    text: string;
    image: string;
    index: number;
    id?: number;
    type: string;
    handleDeleteBtn?: (id: number, type: string) => void;
    addSteps?: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void;
    step_number?: number;
};

export const DeleteMenuButton = ({
    text,
    image,
    index,
    id,
    type,
    handleDeleteBtn,
    addSteps,
    step_number,
}: Props) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>
    ) => {
        if (text === "作り方を追加" && addSteps) {
            addSteps(e);
            return;
        }

        if (text === "作り方を削除") {
            const idOrStep = step_number !== undefined ? step_number : id || -1;
            if (handleDeleteBtn) {
                handleDeleteBtn(idOrStep, type);
            }
            return;
        }

        if (handleDeleteBtn) {
            const idOrStep = id || -1; // idがundefinedの場合は-1
            handleDeleteBtn(idOrStep, type);
        }
    };
    return (
        <>
            <li
                className={`relative flex items-center gap-x-2 w-40 p-2 text-gray-opacity border-gray-opacity border-1 bg-white z-50 first:rounded-t-modal last-of-type:rounded-b-modal hover:bg-beige
                    ${index > 0 && "border-t-0 rounded-t-none"}
                    ${
                        index === length + 1 && "rounded-b-modal rounded-t-none"
                    }`}
                onClick={handleClick}
            >
                {image && (
                    <p className="w-5 h-5">
                        <img src={image} alt="" />
                    </p>
                )}
                {text}
            </li>
            <div className="fixed w-screen h-screen bg-transparent top-0 left-0 z-40"></div>
        </>
    );
};
