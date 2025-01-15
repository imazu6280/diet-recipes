import { RegisterCard } from "../component/RegisterCard";
import { useRegisterCard } from "../hooks/useRegisterCard";
import { RegisterInput } from "../component/RegisterInput";
import { placeHolderType } from "../type/register";

export const RecipeCreate = () => {
    const { addRegister, addCard, addIngredient } = useRegisterCard();

    const placeHolderText: placeHolderType = {
        text: [
            "・味やおすすめポイント",
            "・楽しみ方",
            "・この料理を作ったきっかけ",
        ],
    };
    const placeholderString = placeHolderText.text.join("\n");

    return (
        <form action="">
            <div className="flex flex-col gap-y-6 w-inner pt-2 mx-auto md:w-full md:gap-y-4">
                <div className="grid grid-cols-show-column gap-x-6 tablet_md:grid-cols-1 sm:grid-cols-1">
                    <label
                        htmlFor="mainImage"
                        className="relative h-96 bg-beige rounded-md"
                    >
                        <input
                            type="file"
                            id="mainImage"
                            className="hidden"
                            defaultValue=""
                        />
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
                                        defaultValue=""
                                        className="w-full px-2 py-4 text-34px font-bold bg-beige rounded-md tablet_md:text-xl sm:text-lg"
                                    />
                                </label>
                                <label htmlFor="comments">
                                    <textarea
                                        name="comments"
                                        id="comments"
                                        placeholder={placeholderString}
                                        className="w-full px-10 pt-5 pb-10 break-words bg-beige rounded-md whitespace-pre-wrap"
                                    ></textarea>
                                </label>
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
                                type="text"
                                name="people"
                                placeholder="何人分"
                                defaultValue=""
                                className="w-2/4 p-2 break-words bg-beige rounded-md"
                            />
                        </div>
                        {addRegister.ingredients.map((item, index) => {
                            return <RegisterInput key={index} />;
                        })}
                        <button
                            className="flex justify-center items-center gap-x-2 text-black font-bold"
                            onClick={(e) => addIngredient(e)}
                        >
                            <img src="images/plus.svg" alt="プラス" />
                            <span>材料</span>
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-4 md:bg-white md:pt-4 md:pb-8 md:p-2-auto">
                        <h3 className="text-2xl font-bold">作り方</h3>
                        <ul className="grid grid-cols-4 gap-x-4 gap-y-10 pc_sm:grid-cols-2 tablet_md:grid-cols-1 sm:grid-cols-1">
                            {addRegister.cards.map((step_number) => (
                                <RegisterCard
                                    key={step_number}
                                    step_number={step_number}
                                />
                            ))}
                        </ul>
                        <button
                            className="flex justify-center items-center gap-x-2 text-black font-bold"
                            onClick={(e) => addCard(e)}
                        >
                            <img src="images/plus.svg" alt="プラス" />
                            <span>作り方</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
