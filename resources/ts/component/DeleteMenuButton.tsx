type Props = {
    text: string
    image: string
    index: number
    id: number
    type: string
    handleDeleteBtn: (id: number, type: string) => void
    addSteps?: (e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) => void
    step_number?: number
}

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
    return (
        <>
            <li
                className={`relative flex items-center gap-x-2 w-40 p-2 text-gray-opacity border-gray-opacity border-1 bg-white z-50 first:rounded-t-modal last-of-type:rounded-b-modal hover:bg-beige
                    ${index > 0 && "border-t-0 rounded-t-none"}
                    ${index === length + 1 && "rounded-b-modal rounded-t-none"}`}
                onClick={(e) => {
                    if (text === "作り方を追加" && addSteps) {
                        addSteps(e)
                    } else {
                        // id または step_number を使い分ける
                        const deleteByStepNumber = text === "作り方を削除" // 例えば削除時に step_number を使用する場合
                        const idOrStep: number =
                            deleteByStepNumber && step_number !== undefined ? step_number : id
                        handleDeleteBtn(idOrStep, type) // どちらかを渡す
                    }
                }}
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
    )
}
