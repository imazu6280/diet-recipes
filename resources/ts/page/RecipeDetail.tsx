import { faPerson, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../component/Button";
import { Card } from "../component/Card";
import { buttonColors } from "../constants/buttonColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDetailGet } from "../hooks/useDetailGet";
import { Link, useParams } from "react-router-dom";
import { useRecipeUpdate } from "../hooks/useRecipeUpdate";

export const RecipeDetail = () => {
    const { recipesDetail, recipePfc } = useDetailGet();
    const { getRecipeToEdit } = useRecipeUpdate();
    const recipesStep = recipesDetail?.steps;
    const recipeIngredient = recipesDetail?.ingredients;
    const { id } = useParams();

    return (
        <div className="flex flex-col gap-y-6 w-inner mx-auto md:w-full md:gap-y-4">
            <div className="grid grid-cols-show-column gap-x-6 tb:grid-cols-1">
                <div
                    className="h-96 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${recipesDetail?.thumbnail})`,
                    }}
                ></div>
                <div className="flex flex-col justify-between md:gap-y-4">
                    <div className="flex flex-col gap-y-10 md:gap-y-4 md:px-2 md:py-4 md:bg-white">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-34px font-bold">
                                {recipesDetail?.name}
                            </h2>
                            <p>
                                <span className="text-lg font-semibold">
                                    {recipesDetail?.calories}
                                </span>
                                カロリー
                            </p>
                            <ul className="flex gap-x-3">
                                {recipePfc.map((item, index) => (
                                    <li key={index}>
                                        {item.name}：<strong>{item.pfc}</strong>
                                        g
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="break-words md:p-2 md:text-md md:bg-white_gray md:rounded-lg whitespace-normal">
                            {recipesDetail?.comments}
                        </p>
                    </div>
                    <div className="flex gap-x-4 md:justify-between md:py-4 md:p-2-auto md:gap-0 md:bg-white">
                        <Link to={`/edit/${id}`} onClick={getRecipeToEdit}>
                            <Button
                                isIcon="/images/image17.svg"
                                alt="レシピを編集する"
                                text="レシピを編集する"
                                color={buttonColors.orange}
                                width=""
                                type="submit"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-show-column gap-x-6 md:grid-cols-1 md:gap-y-4">
                <div className="flex flex-col gap-y-4 md:bg-white md:px-2 md:py-4">
                    <h3 className="text-2xl font-bold">材料</h3>
                    <p className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={faPerson} />
                        {recipesDetail?.people}人前
                    </p>
                    <div>
                        {recipeIngredient?.map((item) => (
                            <dl
                                key={item.id}
                                className="flex justify-between py-1.5 border-b border-dotted"
                            >
                                <dt>{item.name}</dt>
                                <dd className="font-bold">
                                    {item.pivot.quantity}g
                                </dd>
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
    );
};
