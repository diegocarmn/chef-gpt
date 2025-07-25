"use client";

import React from "react";
import IngredientsList from "./IngredientsList";
import AiRecipe from "./AiRecipe";
import { getRecipeFromGroq } from "../actions/ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const recipeSectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (recipeSectionRef.current !== null && recipe !== "") {
      recipeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  function addIngredient(formData: FormData) {
    const ingredient = formData.get("ingredient") as string;
    if (!ingredient) return;
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  }

  async function getRecipe() {
    try {
      setLoading(true);
      const generatedRecipeMarkdown = await getRecipeFromGroq(ingredients);
      setRecipe(generatedRecipeMarkdown ?? "");
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
      setRecipe("Houve um problema ao gerar a receita. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-stone-50 min-h-[calc(100vh-6rem)]">
      {ingredients.length === 0 && (
        <section className="text-center pt-10 px-5">
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
        className="pt-10 md:gap-3 px-5 justify-items-center md:flex justify-center mx-auto"
      >
        <input
          type="text"
          name="ingredient"
          maxLength={50}
          className="mb-4 md:mb-0 h-10 bg-white p-3 w-full md:w-[400px] rounded-lg border border-stone-400 shadow-sm focus:outline-none focus:border-stone-500"
          placeholder="ex. atum"
          aria-label="Digite um ingrediente"
        />
        <button
          type="submit"
          className="bg-stone-950 text-white text-sm font-medium py-3 md:py-2 px-12 rounded-lg flex items-center whitespace-nowrap shadow-sm/20 hover:shadow-md/20 hover:bg-stone-800 active:scale-95 transition-all duration-150"
        >
          + Adicionar
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList list={ingredients} getRecipe={getRecipe} />
      )}
      {loading && (
        <section className="text-center py-10">
          <p className="text-lg font-semibold text-[#475467]">
            Buscando uma receita...
          </p>
        </section>
      )}
      {recipe ? <AiRecipe recipe={recipe} ref={recipeSectionRef} /> : null}
    </main>
  );
}
