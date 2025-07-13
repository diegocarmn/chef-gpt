"use client";

import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);

  const ingredientList = ingredients.map((ingredient) => (
    <li
      key={ingredient}
      className="text-[#475467] break-words text-lg font-normal mb-4 pl-2"
    >
      {ingredient}
    </li>
  ));

  function addIngredient(formData: FormData) {
    const ingredient = formData.get("ingredient") as string;
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  }

  return (
    <main className="bg-stone-50 min-h-[calc(100vh-6rem)]">
      <form
        action={addIngredient}
        className="pt-18 gap-3 px-5 flex justify-center mx-auto"
      >
        <input
          type="text"
          name="ingredient"
          maxLength={50}
          className="h-10 bg-white rounded p-3 w-[400px] rounded-lg border border-stone-400 shadow-sm focus:outline-none focus:border-stone-500 "
          placeholder="ex. atum"
          aria-label="Digite um ingrediente"
        />
        <button
          type="submit"
          className="bg-stone-950 text-white text-sm font-medium py-2 px-12 rounded-lg flex items-center whitespace-nowrap w-[]"
        >
          + Adicionar
        </button>
      </form>
      {ingredients.length > 0 && (
        <section className="mt-12 mx-auto flex flex-col max-w-[620px] px-5">
          <h2 className="text-3xl font-semibold text-stone-950 mb-6">
            Ingredients on hand:
          </h2>
          <ul className="list-disc list-inside max-w-148 break-all">
            {ingredientList}
          </ul>
          <section className="bg-[#f0efeb] rounded-lg flex items-center justify-between mt-6">
            <div>
              <h3 className="pl-10 text-lg font-medium text-stone-950">
                Ready for a recipe?
              </h3>
              <p className="pt-2 pl-10 font-normal text-sm text-[#6b7280]">
                Generate a recipe from your list of ingredients.
              </p>
            </div>
            <button className="bg-[#d17557] text-white text-sm font-medium py-3 px-6 rounded-lg flex items-center whitespace-nowrap m-10">
              Get a recipe
            </button>
          </section>
        </section>
      )}
    </main>
  );
}
