import { useState } from "react";

export const useMenu = () => {
    const [open, setopen] = useState(false);
    const [isClose, setIsOpen] = useState(false);

    const menuOpen = () => {
        setopen((prevOpen) => !prevOpen);
    };

    const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setTimeout(() => {
                setopen(false);
            }, 300);
        }
    };

    return { open, menuOpen, handleCloseMenu };
};
