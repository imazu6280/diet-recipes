import { faList, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { SideLinkType } from "../type/sideMenu";

export const sideLink: SideLinkType = [
    { id: 0, label: "人気のレシピ", icon: faStar },
    { id: 1, label: "レシピ一覧", icon: faList },
    { id: 2, label: "レシピ登録", icon: faPlus },
];
