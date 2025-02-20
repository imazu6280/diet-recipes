import { RegisterCard } from "../component/RegisterCard"
// import { RegisterInput } from "../component/RegisterInput"
import { placeHolderType } from "../type/placeholder"
import { useRecipeCreate } from "../hooks/useRecipeCreate"
import { Button } from "../component/Button"
import { sideLink } from "../constants/sideLink"
import { buttonColors } from "../constants/buttonColors"
import { DndContext } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import { RegisterInput } from "../component/RegisterInput"

export const RecipeCreate = () => {
    const {
        createInputValue,
        prevImage,
        errors,
        addIngredient,
        addSteps,
        handleIngredientChange,
        handleStepsChange,
        handleFileChange,
        handleDeleteBtn,
        stepsHandleFileChange,
        favoriteToggleBtn,
        handleIngredientsDrag,
        handleStepDrag,
        CreateRecipeSubmit,
        CreateHandleChange,
    } = useRecipeCreate()

    const placeHolderText: placeHolderType = {
        text: ["・味やおすすめポイント", "・楽しみ方", "・この料理を作ったきっかけ"],
    }
    const placeholderString = placeHolderText.text.join("\n")

    return (
        <form id="create" action="" onSubmit={CreateRecipeSubmit}>
            <div className="flex flex-col gap-y-6 w-inner mx-auto lg:pt-2 md:w-full md:gap-y-4">
                <div className="grid grid-cols-show-column gap-x-6 tablet_md:grid-cols-1 sm:grid-cols-1">
                    <label
                        htmlFor="mainImage"
                        className={`relative w-full rounded-md ${
                            prevImage.mainImage ? "bg-none" : "h-96 bg-beige"
                        }`}
                    >
                        <input
                            type="file"
                            id="mainImage"
                            className="hidden"
                            name="thumbnail"
                            onChange={handleFileChange}
                        />
                        {prevImage.mainImage ? (
                            <p className="w-full object-cover rounded-md lg:max-h-96 bg-white">
                                <img src={prevImage.mainImage} alt="" />
                            </p>
                        ) : (
                            <div className="absolute top-1/3 left-0 right-0 flex flex-col justify-center gap-y-2 text-center px-4 pointer-events-none">
                                <p className="w-16 mx-auto ">
                                    <img src="images/image15.png" alt="" />
                                </p>
                                <p className="text-lg text-bold text-gray-opacity">
                                    料理の写真をのせる
                                </p>
                                <p className="text-sm text-gray-opacity">
                                    オリジナルではないものや料理に関係ない写真はご遠慮ください
                                </p>
                            </div>
                        )}
                    </label>
                    <div className="flex flex-col justify-between md:gap-y-4">
                        <div className="flex flex-col gap-y-10 md:gap-y-4 md:px-2 md:py-4 md:bg-white">
                            <div className="flex flex-col gap-y-4">
                                <label htmlFor="name">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="料理名を入力してください"
                                        value={createInputValue.name}
                                        onChange={CreateHandleChange}
                                        className="w-full px-2 py-4 text-34px font-bold bg-beige rounded-md tablet_md:text-xl sm:text-lg"
                                    />
                                </label>
                                <label htmlFor="comments">
                                    <textarea
                                        name="comments"
                                        id="comments"
                                        placeholder={placeholderString}
                                        value={createInputValue.comments}
                                        onChange={CreateHandleChange}
                                        className="w-full px-10 pt-5 pb-10 break-words bg-beige rounded-md whitespace-pre-wrap"
                                    ></textarea>
                                </label>
                                <div className="flex justify-between gap-y-4 md:flex-col">
                                    <Button
                                        isIcon={sideLink[0].icon}
                                        alt="お気に入り登録"
                                        text="お気に入り"
                                        color={`${
                                            createInputValue.is_favorite === 0
                                                ? buttonColors.gray
                                                : buttonColors.bgOrange
                                        }`}
                                        width="w-40"
                                        type="button"
                                        favoriteToggleBtn={favoriteToggleBtn}
                                    />
                                    {errors.length > 0 && (
                                        <ul className="flex flex-col gap-y-1">
                                            {errors.map((message, index) => (
                                                <li key={index} className="text-red">
                                                    {message}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-show-column gap-x-6 md:grid-cols-1 md:gap-y-4">
                    <div className="flex flex-col gap-y-4 md:bg-white md:px-2 md:py-4">
                        <h3 className="text-2xl font-bold">材料</h3>
                        <div className="flex justify-between items-center gap-x-2">
                            <label htmlFor="people">何人分</label>
                            <input
                                id="people"
                                type="number"
                                name="people"
                                placeholder="何人分"
                                min={0}
                                value={createInputValue.people ?? ""}
                                onChange={CreateHandleChange}
                                className="w-2/4 p-2 break-words bg-beige rounded-md"
                            />
                        </div>
                        <DndContext onDragEnd={handleIngredientsDrag}>
                            <SortableContext items={createInputValue.ingredients}>
                                {createInputValue.ingredients.map((item, index) => {
                                    return (
                                        // <Draggable
                                        //     key={item.id}
                                        //     id={item.id}
                                        //     index={index}
                                        //     item={item}
                                        //     handleIngredientChange={handleIngredientChange}
                                        //     handleDeleteBtn={handleDeleteBtn}
                                        // />
                                        <RegisterInput
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            handleIngredientChange={handleIngredientChange}
                                            handleDeleteBtn={handleDeleteBtn}
                                        />
                                    )
                                })}
                            </SortableContext>
                        </DndContext>
                        <button
                            className="flex justify-center items-center gap-x-2 text-black font-bold"
                            type="button"
                            onClick={(e) => addIngredient(e)}
                        >
                            <img src="images/plus.svg" alt="プラス" />
                            <span>材料</span>
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-4 md:bg-white md:pt-4 md:pb-8 md:p-2-auto">
                        <h3 className="text-2xl font-bold">作り方</h3>
                        <ul className="grid grid-cols-4 gap-x-4 gap-y-10 pc_sm:grid-cols-2 tablet_md:grid-cols-1 sm:grid-cols-1">
                            <DndContext onDragEnd={handleStepDrag}>
                                <SortableContext items={createInputValue.steps}>
                                    {createInputValue.steps.map((item, index) => (
                                        <RegisterCard
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            stepImage={prevImage.stepImage}
                                            handleStepsChange={handleStepsChange}
                                            stepsHandleFileChange={stepsHandleFileChange}
                                            handleDeleteBtn={handleDeleteBtn}
                                            addSteps={addSteps}
                                        />
                                    ))}
                                </SortableContext>
                            </DndContext>
                        </ul>
                        <button
                            className="flex justify-center items-center gap-x-2 text-black font-bold"
                            type="button"
                            onClick={(e) => addSteps(e)}
                        >
                            <img src="images/plus.svg" alt="プラス" />
                            <span>作り方</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
