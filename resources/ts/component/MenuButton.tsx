type Props = {
    open: {
        sideOpen: boolean;
    };
    menuOpen: () => void;
};

export const MenuButton = ({ open, menuOpen }: Props) => {
    return (
        <button onClick={menuOpen} className="w-10 space-y-2 cursor-pointer">
            <div
                className={
                    open.sideOpen
                        ? "w-8 h-0.5 bg-black translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                        : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
            <div
                className={
                    open.sideOpen
                        ? "opacity-0 transition duration-500 ease-in-out"
                        : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
            <div
                className={
                    open.sideOpen
                        ? "w-8 h-0.5 bg-black -rotate-45 transition duration-500 ease-in-out"
                        : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
        </button>
    );
};
