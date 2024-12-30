type Props = {
    open: boolean;
    menuOpen: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
};

export const MenuButton = ({ open, menuOpen }: Props) => {
    return (
        <button onClick={menuOpen} type="button" className="space-y-2">
            <div
                className={
                    open
                        ? "w-8 h-0.5 bg-black translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                        : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
            <div
                className={
                    open
                        ? "opacity-0 transition duration-500 ease-in-out"
                        : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
            <div
                className={
                    open
                        ? "w-8 h-0.5 bg-black -rotate-45 transition duration-500 ease-in-out"
                        : "w-8 h-0.5 bg-black transition duration-500 ease-in-out"
                }
            />
        </button>
    );
};
