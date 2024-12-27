import { useState } from "react";

export const useMenu = () => {
    const [open, setopen] = useState(false);

    const menuOpen = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        if (e.target === e.currentTarget) {
            setopen(false);
        } else {
            setopen(!open);
        }
    };

    return { open, menuOpen };
};
