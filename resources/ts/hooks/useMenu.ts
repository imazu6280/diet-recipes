import { useState } from "react";

export const useMenu = () => {
    const [open, setOpen] = useState({
        sideOpen: false,
        deleteOpen: false,
        searchOpen: false,
    });

    const menuOpen = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        if (e.target === e.currentTarget) {
            setOpen((prevState) => ({ ...prevState, sideOpen: false }));
        } else {
            setOpen((prevState) => ({
                ...prevState,
                sideOpen: !prevState.sideOpen,
            }));
        }
    };

    const toggleDeleteOpen = (
        e: React.MouseEvent<
            HTMLDivElement | HTMLButtonElement | HTMLParagraphElement
        >
    ) => {
        if (e.target === e.currentTarget) {
            setOpen((prevState) => ({ ...prevState, deleteOpen: false }));
        } else {
            setOpen((prevState) => ({
                ...prevState,
                deleteOpen: !prevState.deleteOpen,
            }));
        }
    };

    const toggleSearchOpen = () => {
        setOpen((prevState) => ({
            ...prevState,
            searchOpen: !prevState.searchOpen,
        }));
    };

    return { open, menuOpen, toggleDeleteOpen, toggleSearchOpen };
};
