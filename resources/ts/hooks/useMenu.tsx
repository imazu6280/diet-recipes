import { useState } from "react";

export const useMenu = () => {
    const [open, setopen] = useState(false);

    const menuOpen = () => {
        setopen((prevOpen) => !prevOpen);
    };

    return { open, menuOpen };
};
