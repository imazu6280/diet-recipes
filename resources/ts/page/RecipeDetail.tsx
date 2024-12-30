import { faPerson, faStar } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../component/Button"
import { Card } from "../component/Card"
import { buttonColors } from "../constants/buttonColors"
import { GetCardResponse } from "../type/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDetailGet } from "../hooks/useDetailGet"
import { useEffect } from "react"

const card: GetCardResponse = [
    {
        id: 0,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 1,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 2,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 3,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 4,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 5,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 6,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 7,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
    {
        id: 8,
        image: "https://placehold.jp/350x240.png",
        detail: "ダミーテキスト",
    },
]

export const RecipeDetail = () => {
    const { recipesDetail } = useDetailGet()

    return (
        <div className="flex flex-col gap-y-6 w-inner mx-auto sm:w-full sm:gap-y-4">
            <div className="grid grid-cols-show-column gap-x-6 sm:grid-cols-1">
                <div className="h-96 bg-gray"></div>
                <div className="flex flex-col justify-between sm:gap-y-4">
                    <div className="flex flex-col gap-y-10 sm:gap-y-4 sm:px-2 sm:py-4 sm:bg-white">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-34px font-bold">{recipesDetail.name}</h2>
                            <p>
                                <span className="text-lg font-semibold">OO</span>カロリー
                            </p>
                        </div>
                        <p className="sm:p-2 sm:text-sm sm:bg-white_gray sm:rounded-lg">
                            ダミーテキストダミーテキストダミーテキストダミーテキスト
                        </p>
                    </div>
                    <div className="flex gap-x-4 sm:justify-between sm:py-4 sm:p-2-auto sm:gap-0 sm:bg-white">
                        <Button
                            isIcon="images/image14.svg"
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
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                        <dl className="flex justify-between py-1.5 border-b border-dotted">
                            <dt>ダミー</dt>
                            <dd className="font-bold">ダミー</dd>
                        </dl>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 sm:bg-white sm:pt-4 sm:pb-8 sm:p-2-auto">
                    <h3 className="text-2xl font-bold">作り方</h3>
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-10 sm:grid-cols-1">
                        {card.map((item) => (
                            <Card key={item.id} image={item.image} detail={item.detail} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
