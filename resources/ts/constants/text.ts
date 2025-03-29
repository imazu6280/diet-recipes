import { faList, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { headerLogoType, SideLinkType } from "../type/sideMenu";
import { placeHolderType } from "../type/placeholder";

export const headerLogo: headerLogoType = {
    logo: "DIET-RECIPES",
};

export const sideLink: SideLinkType = [
    { id: 0, label: "人気のレシピ", icon: faStar, link: "/recipes/favorites" },
    { id: 1, label: "レシピ一覧", icon: faList, link: "/recipes" },
    { id: 2, label: "レシピ登録", icon: faPlus, link: "/create" },
];

const placeHolderText: placeHolderType = {
    text: [
        "・味やおすすめポイント",
        "・楽しみ方",
        "・この料理を作ったきっかけ",
    ],
};
export const placeholderString = placeHolderText.text.join("\n");
