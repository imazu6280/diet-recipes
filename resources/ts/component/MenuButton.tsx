type Props = {
    open: {
        sideOpen: boolean;
    };
    menuOpen: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
};

export const MenuButton = ({ open, menuOpen }: Props) => {
    return (
        <div onClick={menuOpen} className="w-8 space-y-2">
            <div
                className={
                    open.sideOpen
                        ? "h-0.5 bg-black translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                        : "h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
            <div
                className={
                    open.sideOpen
                        ? "opacity-0 transition duration-500 ease-in-out"
                        : "h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
            <div
                className={
                    open.sideOpen
                        ? "h-0.5 bg-black -rotate-45 transition duration-500 ease-in-out"
                        : "h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
        </div>
    );
};
