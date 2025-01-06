import { faPerson, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../component/Button";
import { buttonColors } from "../constants/buttonColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RecipeCreate = () => {
    return (
        <form action="">
            <div className="flex flex-col gap-y-6 w-inner mx-auto md:w-full md:gap-y-4">
                <div className="grid grid-cols-show-column gap-x-6 tb:grid-cols-1">
                    <div className="h-96 bg-beige"></div>
                    <div className="flex flex-col justify-between md:gap-y-4">
                        <div className="flex flex-col gap-y-10 md:gap-y-4 md:px-2 md:py-4 md:bg-white">
                            <div className="flex flex-col gap-y-4">
                                <label htmlFor="name">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="料理名を入力してください"
                                        value=""
                                        className="w-full px-2 py-4 text-34px font-bold bg-beige rounded-md"
                                    />
                                </label>
                                <label htmlFor="comments">
                                    <textarea
                                        name="comments"
                                        id="comments"
                                        placeholder="・料理のポイント\n・こだわりのポイント\n・料理を作ったきっかけなど"
                                        className="w-full p-10 break-words bg-beige rounded-md"
                                    ></textarea>
                                </label>
                            </div>
                            <p className="break-words md:p-2 md:text-md md:bg-white_gray md:rounded-lg whitespace-normal"></p>
                        </div>
                        <div className="flex gap-x-4 md:justify-between md:py-4 md:p-2-auto md:gap-0 md:bg-white">
                            <Button
                                isIcon="/images/image14.svg"
                                alt="レシピを保存"
                                text="レシピを保存"
                                color={buttonColors.orange}
                            />
                            <Button
                                isIcon={faStar}
                                alt="お気に入り登録"
                                text="お気に入り登録"
                                color={buttonColors.gray}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-show-column gap-x-6 md:grid-cols-1 md:gap-y-4">
                    <div className="flex flex-col gap-y-4 md:bg-white md:px-2 md:py-4">
                        <h3 className="text-2xl font-bold">材料</h3>
                        <div className="flex justify-between items-center gap-x-2">
                            <label htmlFor="peaple">何人分</label>
                            <input
                                id="peaple"
                                type="text"
                                name="peaple"
                                placeholder="何人分"
                                className="w-2/4 p-2 break-words bg-beige rounded-md"
                            />
                        </div>
                        <div className="grid grid-cols-create-ingredient-column gap-x-2">
                            <div className="bg-gray"></div>
                            <label htmlFor="ingredient">
                                <input
                                    id="ingredient"
                                    type="text"
                                    name="ingredient"
                                    placeholder="鶏胸肉"
                                    className="w-full p-2 break-words bg-beige rounded-md"
                                />
                            </label>
                            <label htmlFor="quantity">
                                <input
                                    id="quantity"
                                    type="text"
                                    name="quantity"
                                    placeholder="200g"
                                    className="w-full p-2 break-words bg-beige rounded-md"
                                />
                            </label>
                            <div className="bg-gray"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 md:bg-white md:pt-4 md:pb-8 md:p-2-auto">
                        <h3 className="text-2xl font-bold">作り方</h3>
                        <ul className="grid grid-cols-4 gap-x-4 gap-y-10 md:grid-cols-1"></ul>
                    </div>
                </div>
            </div>
        </form>
    );
};
