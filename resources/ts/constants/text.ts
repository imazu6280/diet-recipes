import {
    faList,
    faPlus,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { SideLinkType } from "../type/sideMenu";
import { placeHolderType } from "../type/placeholder";

export const sideLink: SideLinkType = [
    {
        id: 0,
        label: "さがす",
        icon: faMagnifyingGlass,
        link: "/",
        isOrange: "/",
    },
    {
        id: 1,
        label: "レシピ一覧",
        icon: faList,
        link: "/recipes",
        isOrange: "/recipes/favorites",
    },
    {
        id: 2,
        label: "レシピ登録",
        icon: faPlus,
        link: "/create",
        isOrange: "/create",
    },
];

const placeHolderText: placeHolderType = {
    text: [
        "・味やおすすめポイント",
        "・楽しみ方",
        "・この料理を作ったきっかけ",
    ],
};
export const placeholderString = placeHolderText.text.join("\n");
