import { useState } from "react";

export const useMenu = () => {
    const [open, setopen] = useState(false);

    const menuOpen = (e: React.MouseEvent<HTMLElement>) => {
        setopen(!open);
        if (e.target === e.currentTarget) {
            console.log(e);

            setopen(false);
        }
    };

    // const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (e.target === e.currentTarget) {
    //         setTimeout(() => {
    //             setopen(false);
    //         }, 300);
    //     }
    // };

    return { open, menuOpen };
};
