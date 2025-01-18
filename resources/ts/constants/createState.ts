export const createState = {
    name: "",
    comments: "",
    thumbnail: "",
    calories: 0,
    people: 1,
    ingredients: [
        {
            id: 0,
            name: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            pivot: {
                recipe_id: 0,
                ingredient_id: 0,
                quantity: 0,
            },
        },
    ],
    steps: [
        {
            id: 0,
            recipe_id: 0,
            step_number: 1,
            description: "",
            thumbnail: "",
        },
    ],
}
