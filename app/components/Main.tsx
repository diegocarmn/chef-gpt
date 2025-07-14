"use client";

import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./CloudeRecipe";
import { getRecipeFromMistral } from "../actions/ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [recipe, setRecipe] = React.useState("");

  function addIngredient(formData: FormData) {
    const ingredient = formData.get("ingredient") as string;
    if (!ingredient) return;
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  }

  async function getRecipe() {
    const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipeMarkdown ?? "");
  }

  return (
    <main className="bg-stone-50 min-h-[calc(100vh-6rem)]">
      {ingredients.length === 0 && (
        <section className="text-center pt-10">
          <h2 className="text-2xl font-semibold text-stone-950 mb-2">
            Descubra uma receita com o que você já tem!
          </h2>
          <p className="font-normal text-sm text-[#6b7280]">
            Digite os ingredientes que você tem em casa e a SaborIA cria uma
            receita deliciosa!
          </p>
        </section>
      )}
      <form
        action={addIngredient}
        className="pt-10 gap-3 px-5 flex justify-center mx-auto"
      >
        <input
          type="text"
          name="ingredient"
          maxLength={50}
          className="h-10 bg-white rounded p-3 w-[400px] rounded-lg border border-stone-400 shadow-sm focus:outline-none focus:border-stone-500"
          placeholder="ex. atum"
          aria-label="Digite um ingrediente"
        />
        <button
          type="submit"
          className="bg-stone-950 text-white text-sm font-medium py-2 px-12 rounded-lg flex items-center whitespace-nowrap shadow-sm/20 hover:shadow-md/20 hover:bg-stone-800 active:scale-95 transition-all duration-150"
        >
          + Adicionar
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList list={ingredients} getRecipe={getRecipe} />
      )}
      {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}
