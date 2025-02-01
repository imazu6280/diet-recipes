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
        <div className="flex flex-col gap-y-6 w-inner mx-auto md:w-full md:gap-y-4">
            <div className="grid grid-cols-show-column gap-x-6 tb:grid-cols-1">
                <div
                    className="h-96 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${recipesDetail?.thumbnail})` }}
                ></div>
                <div className="flex flex-col justify-between md:gap-y-4">
                    <div className="flex flex-col gap-y-10 md:gap-y-4 md:px-2 md:py-4 md:bg-white">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-34px font-bold">{recipesDetail?.name}</h2>
                            <p>
                                <span className="text-lg font-semibold">
                                    {recipesDetail?.calories}
                                </span>
                                カロリー
                            </p>
                        </div>
                        <p className="break-words md:p-2 md:text-md md:bg-white_gray md:rounded-lg whitespace-normal">
                            {recipesDetail?.comments}
                        </p>
                    </div>
                    <div className="flex gap-x-4 md:justify-between md:py-4 md:p-2-auto md:gap-0 md:bg-white">
                        <Button
                            isIcon="/images/image14.svg"
                            alt="レシピを保存"
                            text="レシピを保存"
                            color={buttonColors.orange}
                            width=""
                            type="submit"
                        />
                        <Button
                            isIcon={faStar}
                            alt="お気に入り登録"
                            text="お気に入り登録"
                            color={buttonColors.gray}
                            width=""
                            type="button"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-show-column gap-x-6 md:grid-cols-1 md:gap-y-4">
                <div className="flex flex-col gap-y-4 md:bg-white md:px-2 md:py-4">
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
                                <dd className="font-bold">{item.quantity}g</dd>
                            </dl>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 md:bg-white md:pt-4 md:pb-8 md:p-2-auto">
                    <h3 className="text-2xl font-bold">作り方</h3>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-10 md:grid-cols-1">
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
