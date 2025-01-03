export type stepsSchema = {
    id: number
    recipe_id: number
    step_number: number
    description: string
    thumbnail: string
}

export type GetStepsResponse = stepsSchema[]
