import { useState } from "react";

export const useMenu = () => {
    const [open, setOpen] = useState({
        sideOpen: false,
        deleteOpen: false,
        searchOpen: false,
        sidebarOpen: false,
    });

    const menuOpen = () => {
        setOpen((prevState) => ({ ...prevState, sideOpen: true }));
    };

    const menuClose = () => {
        setOpen((prevState) => ({ ...prevState, sideOpen: false }));
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

    const toggleSidebar = () => {
        setOpen((prevState) => ({
            ...prevState,
            sidebarOpen: !prevState.sidebarOpen,
        }));
    };

    return {
        open,
        menuOpen,
        menuClose,
        toggleDeleteOpen,
        toggleSearchOpen,
        toggleSidebar,
    };
};
