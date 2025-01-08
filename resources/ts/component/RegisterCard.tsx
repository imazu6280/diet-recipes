type Props = {
    step_number: number;
};

export const RegisterCard = ({ step_number }: Props) => {
    return (
        <li className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-4">
            <span className="w-6 h-6 text-center text-white bg-black rounded-full">
                {step_number}
            </span>
            <div className="flex flex-col gap-y-2 sm:flex-col-reverse">
                <label htmlFor="detailImage" className="aspect-square">
                    <input
                        name="detailImage"
                        id="detailImage"
                        className="w-full h-full bg-beige"
                    ></input>
                </label>
                <label htmlFor="detailText">
                    <textarea
                        name="detailText"
                        id="detailText"
                        placeholder="鶏胸肉を一口サイズにカットする"
                        className="w-full px-2 py-4 bg-beige"
                    ></textarea>
                </label>
            </div>
        </li>
    );
};
