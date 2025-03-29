import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type headerLogoType = {
    logo: string;
};

export type SideLinkType = {
    id: number;
    label: string;
    icon: IconDefinition;
    link: string;
}[];

export type SideMenuType = {
    open: {
        sideOpen: boolean;
        deleteOpen: boolean;
        sidebarOpen: boolean;
    };
    menuOpen: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    toggleDeleteOpen: (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => void;
};
