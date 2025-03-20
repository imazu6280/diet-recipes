export const createState = {
    id: 0,
    category_id: "",
    name: "",
    comments: "",
    thumbnail: "",
    calories: 0,
    people: null,
    is_favorite: 0,
    ingredients: [
        {
            id: 0,
            name: "",
            pivot: {
                calories: null,
                protein: null,
                carbs: null,
                fat: null,
                quantity: null,
            },
        },
    ],
    steps: [
        {
            id: 0,
            step_number: 1,
            description: "",
            thumbnail: "",
        },
    ],
};
