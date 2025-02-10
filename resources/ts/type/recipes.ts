export type stepsSchema = {
    id: number
    step_number: number
    description: string
    thumbnail: string | File
    created_at: string
    updated_at: string
}

export type GetStepsResponse = Omit<stepsSchema, "created_at" | "updated_at">[]

export type IngredientSchema = {
    id: number
    name: string
    calories: number | string
    protein: number | string
    carbs: number | string
    fat: number | string
    quantity: number | string
    created_at: string
    updated_at: string
}

export type GetIngredientResponse = Omit<IngredientSchema, "created_at" | "updated_at">[]

export type recipeSchema = {
    id: number
    name: string
    comments: string
    steps: GetStepsResponse
    thumbnail: string | File
    calories: number
    people: number | string
    is_favorite: boolean | number
    created_at: string
    updated_at: string
    ingredients: GetIngredientResponse
}

export type GetRecipesResponse = recipeSchema[]

export type PostRecipesResponse = Omit<recipeSchema, "created_at" | "updated_at">
