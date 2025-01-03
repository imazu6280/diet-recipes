export type stepsSchema = {
    id: number
    recipe_id: number
    step_number: number
    description: string
    thumbnail: string
    created_at: string
    updated_at: string
}

export type GetStepsResponse = stepsSchema[]

export type recipeSchema = {
    id: number
    name: string
    steps: stepsSchema[]
    thumbnail: string
    calories: number
    is_favorite: boolean
    created_at: string
    updated_at: string
    ingredients: any[] // ingredients が空の配列の場合、型を any[] として定義
}

export type GetRecipesResponse = recipeSchema[]
