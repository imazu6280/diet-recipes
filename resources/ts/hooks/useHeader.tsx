import { useState } from "react";

export const useMenu = () => {
    const [open, setOpen] = useState(false);

    const menuOpen = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        if (e.target === e.currentTarget) {
            setOpen(false);
        } else {
            setOpen(!open);
        }
    };

    return { open, menuOpen };
};
