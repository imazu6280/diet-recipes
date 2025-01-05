import { faPerson, faStar } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../component/Button"
import { Card } from "../component/Card"
import { buttonColors } from "../constants/buttonColors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDetailGet } from "../hooks/useDetailGet"

export const RecipeDetail = () => {
    const { recipesDetail } = useDetailGet()
    const recipesStep = recipesDetail?.steps
    const recipeIngredient = recipesDetail?.ingredients

    return (
        <div className="flex flex-col gap-y-6 w-inner mx-auto sm:w-full sm:gap-y-4">
            <div className="grid grid-cols-show-column gap-x-6 sm:grid-cols-1">
                <div className="max-h-96">
                    <img src={recipesDetail?.thumbnail} alt="" />
                </div>
                <div className="flex flex-col justify-between sm:gap-y-4">
                    <div className="flex flex-col gap-y-10 sm:gap-y-4 sm:px-2 sm:py-4 sm:bg-white">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-34px font-bold">{recipesDetail?.name}</h2>
                            <p>
                                <span className="text-lg font-semibold">
                                    {recipesDetail?.calories}
                                </span>
                                カロリー
                            </p>
                        </div>
                        <p className="break-words sm:p-2 sm:text-sm sm:bg-white_gray sm:rounded-lg">
                            {recipesDetail?.comments}
                        </p>
                    </div>
                    <div className="flex gap-x-4 sm:justify-between sm:py-4 sm:p-2-auto sm:gap-0 sm:bg-white">
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
            <div className="grid grid-cols-show-column gap-x-6 sm:grid-cols-1 sm:gap-y-4">
                <div className="flex flex-col gap-y-4 sm:bg-white sm:px-2 sm:py-4">
                    <h3 className="text-2xl font-bold">材料</h3>
                    <p className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={faPerson} />
                        1枚分
                    </p>
                    <div>
                        {recipeIngredient?.map((item) => (
                            <dl
                                key={item.id}
                                className="flex justify-between py-1.5 border-b border-dotted"
                            >
                                <dt>{item.name}</dt>
                                <dd className="font-bold">{item.pivot.quantity}g</dd>
                            </dl>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 sm:bg-white sm:pt-4 sm:pb-8 sm:p-2-auto">
                    <h3 className="text-2xl font-bold">作り方</h3>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-10 sm:grid-cols-1">
                        {recipesStep?.map((item) => (
                            <Card
                                key={item.step_number}
                                image={item.thumbnail}
                                detail={item.description}
                                step_number={item.step_number}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
