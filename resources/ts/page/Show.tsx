import { Button } from "../component/Button"
import { Card } from "../component/Card"
import { GetCardResponse } from "../type/card"

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
]

export const Show = () => {
    return (
        <div className="flex flex-col gap-y-6 w-inner mx-auto">
            <div className="grid grid-cols-show-column gap-x-6 sm:block">
                <div className="h-96 bg-gray"></div>
                <div className="flex flex-col justify-between sm:gap-y-6">
                    <div className="flex flex-col gap-y-10 sm:gap-y-4">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-34px font-bold">ダミーテキスト</h2>
                            <p>
                                <span className="text-lg font-semibold">OO</span>カロリー
                            </p>
                        </div>
                        <p className="sm:p-2 sm:text-sm sm:bg-gray sm:rounded-lg">
                            ダミーテキストダミーテキストダミーテキストダミーテキスト
                        </p>
                    </div>
                    <div className="flex gap-x-4">
                        <Button isIcon={true} text="レシピを保存" />
                        <Button isIcon={true} text="お気に入り登録" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-show-column gap-x-6 sm:block">
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-2xl font-bold">材料</h3>
                    <p>1枚分</p>
                    <div>
                        <div className="border-b border-dotted">
                            <dl className="flex justify-between py-1.5">
                                <dt>ダミー</dt>
                                <dd className="font-bold">ダミー</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
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
