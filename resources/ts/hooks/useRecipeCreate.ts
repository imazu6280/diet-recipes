import React, { useState } from "react";
import { PostRecipesResponse } from "../type/recipes";
import { createState } from "../constants/createState";
import { useTopGet } from "./useTopGet";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoriteToggleSlice";
import { RootState } from "../redux/store";

export const useRecipeCreate = () => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(
        (state: RootState) => state.favorite.is_favorite
    );
    const { setRecipes, setFavoriteRecipes } = useTopGet();
    const [createInputValue, setCreateInputValue] =
        useState<PostRecipesResponse>(createState);
    const [prevImage, setPrevImage] = useState<{
        mainImage: string;
        stepImage: string[];
    }>({
        mainImage: "",
        stepImage: [],
    });
    const [errors, setErrors] = useState<string[]>([]);

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newIngredient = {
            id: createInputValue.ingredients.length,
            name: "",
            pivot: {
                calories: null,
                protein: null,
                carbs: null,
                fat: null,
                quantity: null,
            },
        };

        setCreateInputValue((prevRegister) => ({
            ...prevRegister,
            ingredients: [...prevRegister.ingredients, newIngredient],
        }));
    };

    const addSteps = (
        e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>
    ) => {
        e.preventDefault();
        const newSteps = {
            id: createInputValue.steps.length,
            step_number: createInputValue.steps.length + 1,
            description: "",
            thumbnail: "",
        };

        setCreateInputValue((prevStep) => ({
            ...prevStep,
            steps: [...prevStep.steps, newSteps],
        }));
    };

    const CreateHandleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setCreateInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleIngredientChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const numericValue = ["quantity", "protein", "fat", "carbs"].includes(
            name
        )
            ? Number(value) || 0
            : value;

        const newIngredients = [...createInputValue.ingredients];
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

        setCreateInputValue((prevState) => ({
            ...prevState,
            ingredients: newIngredients,
            calories: totalCalories,
        }));
    };

    const handleStepsChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target;
        const newSteps = [...createInputValue.steps];

        newSteps[index] = {
            ...newSteps[index],
            [name]: value,
        };
        setCreateInputValue((prevState) => ({
            ...prevState,
            steps: newSteps,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;

        if (files && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);

            setPrevImage((prev) => ({
                ...prev,
                mainImage: fileUrl,
            }));

            setCreateInputValue((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        }
    };

    const stepsHandleFileChange = (
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

            setCreateInputValue((prevState) => {
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

    const favoriteToggleBtn = () => {
        dispatch(toggleFavorite());
        setCreateInputValue((prev) => ({
            ...prev,
            is_favorite: isFavorite === 1 ? 0 : 1,
        }));
    };

    const handleDeleteBtn = (id: number, type: string) => {
        if (type === "ingredients" && createInputValue.ingredients.length > 1) {
            const newIngredients = createInputValue.ingredients.filter(
                (ingredient) => ingredient.id !== id
            );
            setCreateInputValue((prevState) => {
                return {
                    ...prevState,
                    ingredients: newIngredients,
                };
            });
        } else if (type === "steps" && createInputValue.steps.length > 1) {
            const newSteps = createInputValue.steps.filter(
                (step) => step.step_number !== id
            );

            const newImages = prevImage.stepImage.filter(
                (_, index) => index !== id - 1
            );
            const updatedSteps = newSteps.map((step, index) => ({
                ...step,
                step_number: index + 1,
            }));

            setCreateInputValue((prevState) => ({
                ...prevState,
                steps: updatedSteps,
            }));

            setPrevImage((prev) => ({
                ...prev,
                stepImage: newImages,
            }));
        }
    };

    const handleIngredientsDrag = (e: DragEndEvent) => {
        const { active, over } = e;
        if (!active || !over || active.id === over.id) return;

        const oldIndex = createInputValue.ingredients.findIndex(
            (item) => item.id === active.id
        );
        const newIndex = createInputValue.ingredients.findIndex(
            (item) => item.id === over.id
        );

        if (oldIndex === -1 || newIndex === -1) return;

        const newIngredients = arrayMove(
            createInputValue.ingredients,
            oldIndex,
            newIndex
        );

        setCreateInputValue((prevState) => ({
            ...prevState,
            ingredients: newIngredients,
        }));
    };

    const handleStepDrag = (e: DragEndEvent) => {
        const { active, over } = e;

        if (!active || !over || active.id === over.id) return;

        const oldIndex = createInputValue.steps.findIndex(
            (item) => item.id === active.id
        );
        const newIndex = createInputValue.steps.findIndex(
            (item) => item.id === over.id
        );

        if (oldIndex === -1 || newIndex === -1) return;

        const newSteps = arrayMove(createInputValue.steps, oldIndex, newIndex);

        const updatedSteps = newSteps.map((step, index) => ({
            ...step,
            step_number: index + 1,
        }));

        const newImages = arrayMove(prevImage.stepImage, oldIndex, newIndex);

        setCreateInputValue((prevState) => ({
            ...prevState,
            steps: updatedSteps,
        }));

        setPrevImage((prev) => ({
            ...prev,
            stepImage: newImages,
        }));
    };

    const CreateRecipeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validateForm = () => {
            let newErrors: string[] = [];

            if (!createInputValue.name)
                newErrors = [...newErrors, "料理名は必須です"];
            if (!createInputValue.comments)
                newErrors = [...newErrors, "コメントは必須です"];
            if (!createInputValue.thumbnail)
                newErrors = [...newErrors, "サムネイルは必須です"];
            if (Number(createInputValue.people) <= 0) {
                newErrors = [...newErrors, "人数は1以上で指定してください"];
            }

            const firstIngredientError = createInputValue.ingredients.find(
                (ingredient) => !ingredient.name
            );
            if (firstIngredientError) {
                newErrors = [...newErrors, "食材名は必須です"];
            }

            const firstStepError = createInputValue.steps.find(
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
        formData.append("name", createInputValue.name);
        formData.append("comments", createInputValue.comments);
        formData.append("thumbnail", createInputValue.thumbnail);
        formData.append(
            "calories",
            (createInputValue.calories ?? 0).toString()
        );
        formData.append("people", (createInputValue.people ?? 0).toString());
        formData.append("is_favorite", isFavorite.toString());

        createInputValue.ingredients.map((ingredient, index) => {
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

        createInputValue.steps.map((step, index) => {
            formData.append(
                `steps[${index}][step_number]`,
                step.step_number.toString()
            );
            formData.append(`steps[${index}][description]`, step.description);
            if (step.thumbnail) {
                formData.append(`steps[${index}][thumbnail]`, step.thumbnail);
            }
        });

        try {
            const res = await fetch("api/recipes", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error("API Error:", errorText);
                return;
            }

            const result = await res.json();
            setRecipes((prevRecipe) => [...prevRecipe, result]);

            if (createInputValue.is_favorite === 1) {
                setFavoriteRecipes((prevRecipe) => [...prevRecipe, result]);
            }

            console.log("post success!!", result);

            location.href = "/";
        } catch (error) {
            console.error("post error!!", error);
        }
    };

    return {
        createInputValue,
        prevImage,
        errors,
        addIngredient,
        addSteps,
        handleIngredientChange,
        handleStepsChange,
        handleFileChange,
        stepsHandleFileChange,
        handleDeleteBtn,
        handleIngredientsDrag,
        handleStepDrag,
        favoriteToggleBtn,
        CreateRecipeSubmit,
        CreateHandleChange,
    };
};
