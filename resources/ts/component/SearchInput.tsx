type Props = {
    isStyle: boolean;
    id: string;
    type: string;
    top: string;
    width: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({
    isStyle,
    id,
    type,
    top,
    width,
    handleSearchChange,
}: Props) => {
    return (
        <label className={`relative ${width}`}>
            <input
                type={type}
                id={id}
                className={`pl-10 z-0 border border-gray ${
                    isStyle ? "p-2 rounded-full" : "py-2 pr-2 rounded-lg"
                } ${width}`}
                placeholder="使いたい食材は？"
                onChange={handleSearchChange}
            />
            <p className={`absolute left-2 ${top}`}>
                <img src="/images/image01.png" alt="" />
            </p>
        </label>
    );
};
