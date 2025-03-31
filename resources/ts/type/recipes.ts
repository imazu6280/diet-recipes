export type stepsSchema = {
    id: number;
    step_number: number;
    description: string;
    thumbnail: string;
    created_at: string;
    updated_at: string;
};

export type GetStepsResponse = Omit<stepsSchema, "created_at" | "updated_at">[];

export type IngredientSchema = {
    id: number;
    name: string;
    pivot: {
        calories: number | null;
        protein: number | null;
        carbs: number | null;
        fat: number | null;
        quantity: number | null;
    };
    created_at: string;
    updated_at: string;
};

export type GetIngredientResponse = Omit<
    IngredientSchema,
    "created_at" | "updated_at"
>[];

export type recipeSchema = {
    id: number;
    category_id: string;
    name: string;
    comments: string;
    steps: GetStepsResponse;
    thumbnail: string;
    calories: number;
    people: number | null;
    is_favorite: boolean | number;
    created_at: string;
    updated_at: string;
    ingredients: GetIngredientResponse;
};

export type GetRecipesResponse = recipeSchema[];

export type PostRecipesResponse = Omit<
    recipeSchema,
    "created_at" | "updated_at"
> & {
    thumbnail: string | File;
    steps: (Pick<
        stepsSchema,
        "id" | "step_number" | "description" | "thumbnail"
    > & {
        thumbnail: string | File;
    })[];
};

export type recipePfc = {
    name: string;
    pfc: number;
};

export type recipePfcResponse = recipePfc[];
