import { Button } from "../component/Button"

export const Show = () => {
    return (
        <div className="flex flex-col gap-y-6 w-inner mx-auto">
            <div className="grid grid-cols-show-column gap-x-6">
                <div className="h-96 bg-gray"></div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-34px font-bold">ダミーテキスト</h2>
                            <p>
                                <span className="text-lg font-semibold">OO</span>カロリー
                            </p>
                        </div>
                        <p>ダミーテキストダミーテキストダミーテキストダミーテキスト</p>
                    </div>
                    <div className="flex gap-x-4">
                        <Button isIcon={true} text="レシピを保存" />
                        <Button isIcon={true} text="お気に入り登録" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-show-column gap-x-6">
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
                    <ul className="grid grid-cols-4 gap-x-4 gap-y-10">
                        <li className="flex flex-col gap-y-2">
                            <span className="w-6 h-6 text-center text-white bg-black rounded-full">
                                1
                            </span>
                            <figure
                                className="w-full py-72px rounded-lg bg-gray
                            "
                            >
                                <img src="" alt="" />
                            </figure>
                            <figcaption>
                                ダミーテキストダミーテキストダミーテキストダミーテキスト
                            </figcaption>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
