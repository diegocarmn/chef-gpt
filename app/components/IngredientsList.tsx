import { getRecipeFromMistral } from "../actions/ai";

export default function IngredientsList(props: {
  list: string[];
  getRecipe: () => void;
}) {
  const minIngredients = 3;
  let id = 0;

  const ingredientList = props.list.map((ingredient: string) => (
    <li
      key={id++}
      className="text-[#475467] break-words text-lg font-normal mb-4 pl-2"
    >
      {ingredient}
    </li>
  ));

  return (
    <section className="mt-12 mx-auto flex flex-col max-w-[620px] px-5">
      <h2 className="text-3xl font-semibold text-stone-950 mb-6">
        Ingredientes disponíveis:
      </h2>
      <ul className="list-disc list-inside max-w-148 break-all">
        {ingredientList}
      </ul>
      <section className="bg-[#f0efeb] rounded-lg flex items-center justify-between mt-6">
        <div>
          {props.list.length > minIngredients ? (
            <h3 className="pl-10 pt-4 text-lg font-medium text-stone-950">
              Pronto pra uma receita?
            </h3>
          ) : null}
          <p className="pl-10 py-4 font-normal text-sm text-[#6b7280]">
            {props.list.length > minIngredients
              ? "Busque uma receita com sua lista de ingredientes."
              : "Adicione pelo menos 4 ingredientes para buscar uma receita."}
          </p>
        </div>
        {props.list.length > minIngredients ? (
          <button
            onClick={props.getRecipe}
            className="bg-[#d17557] text-white text-sm font-medium py-3 px-6 rounded-lg flex items-center whitespace-nowrap m-10 hover:bg-amber-600 active:scale-95 transition-all duration-150 shadow-sm/20 hover:shadow-md/20"
          >
            Ver receita
          </button>
        ) : null}
      </section>
    </section>
  );
}
