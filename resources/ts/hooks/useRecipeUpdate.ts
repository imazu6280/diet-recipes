import React, { useEffect, useState } from "react";
import { recipeSchema } from "../type/recipes";
import { createState } from "../constants/createState";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoriteToggleSlice";
import { RootState } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";

export const useRecipeUpdate = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const isFavorite = useSelector(
        (state: RootState) => state?.favorite.is_favorite
    );
    const [updateInputValue, setUpdateInputValue] =
        useState<Omit<recipeSchema, "created_at" | "updated_at">>(createState);
    const [prevImage, setPrevImage] = useState<{
        mainImage: string;
        stepImage: string[];
    }>({
        mainImage: "",
        stepImage: [],
    });
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const updateAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newIngredient = {
            id: updateInputValue.ingredients.length,
            name: "",
            pivot: {
                calories: null,
                protein: null,
                carbs: null,
                fat: null,
                quantity: null,
            },
        };

        setUpdateInputValue((prevRegister) => ({
            ...prevRegister,
            ingredients: [...prevRegister.ingredients, newIngredient],
        }));
    };

    const updateAddSteps = (
        e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>
    ) => {
        e.preventDefault();
        const newSteps = {
            id: updateInputValue.steps.length,
            step_number: updateInputValue.steps.length + 1,
            description: "",
            thumbnail: "",
        };

        setUpdateInputValue((prevStep) => ({
            ...prevStep,
            steps: [...prevStep.steps, newSteps],
        }));
    };

    const updateCreateHandleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setUpdateInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const updateHandleIngredientChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const numericValue = ["quantity", "protein", "fat", "carbs"].includes(
            name
        )
            ? Number(value) || 0
            : value;

        const newIngredients = [...updateInputValue.ingredients];
        if (name === "name") {
            newIngredients[index] = {
                ...newIngredients[index],
                [name]: value,
            };
        } else {
            newIngredients[index] = {
                ...newIngredients[index],
                pivot: {
                    ...newIngredients[index].pivot,
                    [name]: numericValue,
                },
            };
        }

        const proteinNumber = Number(newIngredients[index].pivot.protein) || 0;
        const fatNumber = Number(newIngredients[index].pivot.fat) || 0;
        const carbsNumber = Number(newIngredients[index].pivot.carbs) || 0;

        const caloriesNumber =
            proteinNumber * 4 + fatNumber * 9 + carbsNumber * 4;
        newIngredients[index].pivot.calories = Number(
            caloriesNumber.toFixed(2)
        );

        const caloriesArray = newIngredients.map(
            (item) => item.pivot.calories || 0
        );
        let totalCalories = 0;

        for (let numberCalories of caloriesArray) {
            totalCalories += numberCalories;
        }

        setUpdateInputValue((prevState) => ({
            ...prevState,
            ingredients: newIngredients,
            calories: totalCalories,
        }));
    };

    const updateHandleStepsChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const newSteps = [...updateInputValue.steps];

        newSteps[index] = {
            ...newSteps[index],
            [name]: value,
        };
        setUpdateInputValue((prevState) => ({
            ...prevState,
            steps: newSteps,
        }));
    };

    const updateHandleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;

        if (files && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);

            setPrevImage((prev) => ({
                ...prev,
                mainImage: fileUrl,
            }));

            setUpdateInputValue((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        }
    };

    const updateStepsHandleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { name, files } = e.target;

        if (files && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);
            setPrevImage((prev) => {
                const updatedStepImages = [...prev.stepImage];
                updatedStepImages[index] = fileUrl;
                return {
                    ...prev,
                    stepImage: updatedStepImages,
                };
            });

            setUpdateInputValue((prevState) => {
                const updatedSteps = [...prevState.steps];
                updatedSteps[index] = {
                    ...updatedSteps[index],
                    [name]: file,
                };
                return {
                    ...prevState,
                    steps: updatedSteps,
                };
            });
        }
    };

    const updateFavoriteToggleBtn = () => {
        dispatch(toggleFavorite());
        setUpdateInputValue((prev) => ({
            ...prev,
            is_favorite: isFavorite === 1 ? 0 : 1,
        }));
    };

    const updateHandleDeleteBtn = (id: number, type: string) => {
        if (type === "ingredients" && updateInputValue.ingredients.length > 1) {
            const newIngredients = updateInputValue.ingredients.filter(
                (ingredient) => ingredient.id !== id
            );
            setUpdateInputValue((prevState) => {
                return {
                    ...prevState,
                    ingredients: newIngredients,
                };
            });
        } else if (type === "steps" && updateInputValue.steps.length > 1) {
            const newSteps = updateInputValue.steps.filter(
                (step) => step.step_number !== id
            );

            const newImages = prevImage.stepImage.filter(
                (_, index) => index !== id - 1
            );
            const updatedSteps = newSteps.map((step, index) => ({
                ...step,
                step_number: index + 1,
            }));

            setUpdateInputValue((prevState) => ({
                ...prevState,
                steps: updatedSteps,
            }));

            setPrevImage((prev) => ({
                ...prev,
                stepImage: newImages,
            }));
        }
    };

    const updateHandleIngredientsDrag = (e: DragEndEvent) => {
        const { active, over } = e;
        if (!active || !over || active.id === over.id) return;

        const oldIndex = updateInputValue.ingredients.findIndex(
            (item) => item.id === active.id
        );
        const newIndex = updateInputValue.ingredients.findIndex(
            (item) => item.id === over.id
        );

        if (oldIndex === -1 || newIndex === -1) return;

        const newIngredients = arrayMove(
            updateInputValue.ingredients,
            oldIndex,
            newIndex
        );

        setUpdateInputValue((prevState) => ({
            ...prevState,
            ingredients: newIngredients,
        }));
    };

    const updateHandleStepDrag = (e: DragEndEvent) => {
        const { active, over } = e;

        if (!active || !over || active.id === over.id) return;

        const oldIndex = updateInputValue.steps.findIndex(
            (item) => item.id === active.id
        );
        const newIndex = updateInputValue.steps.findIndex(
            (item) => item.id === over.id
        );

        if (oldIndex === -1 || newIndex === -1) return;

        const newSteps = arrayMove(updateInputValue.steps, oldIndex, newIndex);

        const updatedSteps = newSteps.map((step, index) => ({
            ...step,
            step_number: index + 1,
        }));

        const newImages = arrayMove(prevImage.stepImage, oldIndex, newIndex);

        setUpdateInputValue((prevState) => ({
            ...prevState,
            steps: updatedSteps,
        }));

        setPrevImage((prev) => ({
            ...prev,
            stepImage: newImages,
        }));
    };

    const getRecipeToEdit = async () => {
        try {
            const res = await fetch(`/api/recipes/edit/${id}`);
            const json: Omit<recipeSchema, "created_at" | "updated_at"> =
                await res.json();
            setUpdateInputValue(json);
            setPrevImage({
                mainImage: json.thumbnail,
                stepImage: json.steps.map((item) => item.thumbnail),
            });
        } catch (error) {
            console.error("get error!!", error);
        }
    };

    const updateCreateRecipeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validateForm = () => {
            let newErrors: string[] = [];

            if (!updateInputValue.name) {
                newErrors = [...newErrors, "料理名は必須です"];
            }

            if (!updateInputValue.comments) {
                newErrors = [...newErrors, "コメントは必須です"];
            }

            // if (!updateInputValue.thumbnail) {
            //     newErrors = [...newErrors, "サムネイルは必須です"];
            // }

            if (Number(updateInputValue.people) <= 0) {
                newErrors = [...newErrors, "人数は1以上で指定してください"];
            }

            const firstIngredientError = updateInputValue.ingredients.find(
                (ingredient) => !ingredient.name
            );
            if (firstIngredientError) {
                newErrors = [...newErrors, "食材名は必須です"];
            }

            const firstStepError = updateInputValue.steps.find(
                (step) => !step.description
            );
            if (firstStepError) {
                newErrors = [...newErrors, "ステップの説明は必須です"];
            }

            setErrors(newErrors);

            return newErrors.length === 0;
        };

        const isValid = validateForm();
        if (!isValid) return;

        const formData = new FormData();

        formData.append("category_id", updateInputValue.category_id);
        formData.append("name", updateInputValue.name);
        formData.append("comments", updateInputValue.comments);
        formData.append("thumbnail", updateInputValue.thumbnail);
        formData.append(
            "calories",
            (updateInputValue.calories ?? 0).toString()
        );
        formData.append("people", (updateInputValue.people ?? 0).toString());
        formData.append("is_favorite", isFavorite.toString());

        updateInputValue.ingredients.map((ingredient, index) => {
            formData.append(`ingredients[${index}][name]`, ingredient.name);
            formData.append(
                `ingredients[${index}][calories]`,
                (ingredient.pivot.calories ?? 0).toString()
            );
            formData.append(
                `ingredients[${index}][protein]`,
                (ingredient.pivot.protein ?? 0).toString()
            );
            formData.append(
                `ingredients[${index}][carbs]`,
                (ingredient.pivot.carbs ?? 0).toString()
            );
            formData.append(
                `ingredients[${index}][fat]`,
                (ingredient.pivot.fat ?? 0).toString()
            );
            formData.append(
                `ingredients[${index}][quantity]`,
                (ingredient.pivot.quantity ?? 0).toString()
            );
        });

        updateInputValue.steps.map((step, index) => {
            formData.append(
                `steps[${index}][step_number]`,
                step.step_number.toString()
            );
            formData.append(`steps[${index}][description]`, step.description);
            if (step.thumbnail) {
                formData.append(`steps[${index}][thumbnail]`, step.thumbnail);
            }
        });

        formData.append("_method", "PUT");

        try {
            const res = await fetch(`/api/recipes/${id}`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error("API Error:", errorText);
                return;
            }

            const result = await res.json();

            console.log("PUT success!!", result);

            navigate(`/show/${id}`);
        } catch (error) {
            console.error("PUT error!!", error);
        }
    };

    useEffect(() => {
        getRecipeToEdit();
    }, []);

    return {
        updateInputValue,
        prevImage,
        errors,
        updateAddIngredient,
        updateAddSteps,
        updateCreateHandleChange,
        updateHandleIngredientChange,
        updateHandleStepsChange,
        updateHandleFileChange,
        updateStepsHandleFileChange,
        updateHandleDeleteBtn,
        updateHandleIngredientsDrag,
        updateHandleStepDrag,
        updateFavoriteToggleBtn,
        getRecipeToEdit,
        updateCreateRecipeSubmit,
    };
};
