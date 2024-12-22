export type recipeSchema = {
    id: number
    name: string
    calories: number
    thumbnail: string
    isFavorite: boolean
}

export type GetRecipesResponse = recipeSchema[]
