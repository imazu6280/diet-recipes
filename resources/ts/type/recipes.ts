export type stepsSchema = {
    id: number
    step_number: number
    description: string
    thumbnail: string
    created_at: string
    updated_at: string
}

export type GetStepsResponse = stepsSchema[]

export type IngredientSchema = {
    id: number
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    quantity: number
    created_at: string
    updated_at: string
}

export type GetIngredientResponse = IngredientSchema[]

export type recipeSchema = {
    id: number
    name: string
    comments: string
    steps: GetStepsResponse
    thumbnail: string
    calories: number
    people: number | undefined
    is_favorite: boolean
    created_at: string
    updated_at: string
    ingredients: GetIngredientResponse
}

export type GetRecipesResponse = recipeSchema[]

export type PostRecipesResponse = Omit<recipeSchema, "created_at" | "updated_at">[]
