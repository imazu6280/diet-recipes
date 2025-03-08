type Props = {
    isStyle: boolean;
    id: string;
    type: string;
    top: string;
    width: string;
};

export const SearchInput = ({ isStyle, id, type, top, width }: Props) => {
    return (
        <label htmlFor={id} className={`relative ${width}`}>
            <input
                type={type}
                className={`pl-10 z-0 border border-gray ${
                    isStyle ? "p-2 rounded-full" : "py-2 pr-2 rounded-lg"
                } ${width}`}
                placeholder="使いたい食材は？"
            />
            <p className={`absolute left-2 ${top}`}>
                <img src="/images/image01.png" alt="" />
            </p>
        </label>
    );
};
