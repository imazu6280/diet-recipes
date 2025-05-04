type Props = {
    image: string;
    detail: string;
    step_number: number;
};

export const Card = ({ image, detail, step_number }: Props) => {
    return (
        <li className="flex flex-col gap-y-2 md:flex-row md:gap-x-4">
            <span className="w-6 h-6 text-center text-white bg-black rounded-full sm:min-w-6">
                {step_number}
            </span>
            <div className="flex flex-col flex-shrink gap-y-2 w-full">
                <figure
                    className="w-full aspect-5/4 rounded-l bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></figure>
                <figcaption>{detail}</figcaption>
            </div>
        </li>
    );
};
