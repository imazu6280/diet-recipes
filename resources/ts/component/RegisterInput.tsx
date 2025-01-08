export const RegisterInput = () => {
    return (
        <div className="grid grid-cols-create-ingredient-column gap-x-2">
            <div className="bg-gray"></div>
            <label htmlFor="ingredient">
                <input
                    id="ingredient"
                    type="text"
                    name="ingredient"
                    placeholder="鶏胸肉"
                    className="w-full p-2 break-words bg-beige rounded-md"
                />
            </label>
            <label htmlFor="quantity">
                <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="200g"
                    className="w-full p-2 break-words bg-beige rounded-md"
                />
            </label>
            <div className="bg-gray"></div>
        </div>
    )
}
