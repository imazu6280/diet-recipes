import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type SideLinkType = {
    id: number;
    label: string;
    icon: IconDefinition;
}[];

export type SideMenuType = {
    open: boolean;
    menuOpen: () => void;
};
