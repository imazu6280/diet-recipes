import { Button } from "../component/Button";
import { SearchInput } from "../component/SearchInput";
import { buttonColors } from "../constants/buttonColors";

export const RecipeList = () => {
    return (
        <div>
            <div>
                <ul className="flex">
                    <li className="p-4 border-b-2 border-orange">新着</li>
                    <li className="p-4">お気に入り</li>
                </ul>
                <h2>
                    <strong>鶏肉</strong>レシピ<span>111</span>
                </h2>
                <div className="grid grid-cols-wrapper-column gap-x-6">
                    <div className="flex flex-col gap-y-4">
                        <p>お気に入りの「鶏肉」レシピ</p>
                        <ul className="flex gap-x-2">
                            <li className="px-16 py-10 rounded-lg bg-black">
                                <img src="" alt="" />
                            </li>
                            <li className="px-16 py-10 rounded-lg bg-black">
                                <img src="" alt="" />
                            </li>
                            <li className="px-16 py-10 rounded-lg bg-black">
                                <img src="" alt="" />
                            </li>
                        </ul>
                        <div className="grid grid-cols-list-column rounded-md shadow-black">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="flex flex-col gap-y-1 p-4">
                                <h3 className="text-xl font-semibold">
                                    鶏肉パリパリレシピ
                                </h3>
                                <p>
                                    ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト
                                </p>

                                <div>
                                    <img src="" alt="" />
                                    <p>2人前</p>
                                </div>
                                <p className="pt-1">コメント</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-list-column rounded-md shadow-black">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="flex flex-col gap-y-1 p-4">
                                <h3 className="text-xl font-semibold">
                                    鶏肉パリパリレシピ
                                </h3>
                                <p>
                                    ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト
                                </p>

                                <div>
                                    <img src="" alt="" />
                                    <p>2人前</p>
                                </div>
                                <p className="pt-1">コメント</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-list-column rounded-md shadow-black">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="flex flex-col gap-y-1 p-4">
                                <h3 className="text-xl font-semibold">
                                    鶏肉パリパリレシピ
                                </h3>
                                <p>
                                    ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト
                                </p>

                                <div>
                                    <img src="" alt="" />
                                    <p>2人前</p>
                                </div>
                                <p className="pt-1">コメント</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-list-column rounded-md shadow-black">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="flex flex-col gap-y-1 p-4">
                                <h3 className="text-xl font-semibold">
                                    鶏肉パリパリレシピ
                                </h3>
                                <p>
                                    ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト
                                </p>

                                <div>
                                    <img src="" alt="" />
                                    <p>2人前</p>
                                </div>
                                <p className="pt-1">コメント</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-list-column rounded-md shadow-black">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div className="flex flex-col gap-y-1 p-4">
                                <h3 className="text-xl font-semibold">
                                    鶏肉パリパリレシピ
                                </h3>
                                <p>
                                    ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト・ダミーテキスト
                                </p>

                                <div>
                                    <img src="" alt="" />
                                    <p>2人前</p>
                                </div>
                                <p className="pt-1">コメント</p>
                            </div>
                        </div>
                    </div>
                    <div className="sticky top-0 h-full">
                        <div className="flex justify-between">
                            <h3>絞り込み機能</h3>
                            <p>リセット</p>
                        </div>

                        <form action="">
                            <SearchInput
                                isStyle={false}
                                id="search"
                                type="text"
                                top="top-1/4"
                            />
                            <Button
                                isIcon=""
                                alt=""
                                text="検索"
                                color={buttonColors.bgOrange}
                                width=""
                                type="button"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
