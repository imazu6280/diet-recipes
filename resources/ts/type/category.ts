export type categoryType = {
    id: number;
    category: string;
    icon: string;
}[];

export type categorySchema = {
    id: number;
    name: string;
    icon: string;
};

export type GetCategoryResponse = categorySchema[];
