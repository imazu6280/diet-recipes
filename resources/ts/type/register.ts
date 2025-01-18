export type Ingredient = {
    id: number
    ingredient: string
    quantity: string
}

export type addRegisterType = {
    cards: number[]
    ingredients: Ingredient[]
}

export type placeHolderType = {
    text: string[]
}
