import ReactMarkdown from "react-markdown";

export default function AiRecipe(props: { recipe: string }) {
  return (
    <section className="px-5 pb-5 md:py-10 max-w-148 mx-auto" aria-live="polite">
      <h2 className="text-3xl font-semibold text-stone-950 mb-6">
        Recomendação de receita:
      </h2>
      <article className="prose prose-strong:text-lg prose-strong:text-[#475467] prose-strong:font-bold prose-li:text-[#475467] prose-li:text-lg prose-p:text-[#475467] prose-p:text-lg prose-headings:text-[#475467] prose-headings:text-lg">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}
//text-[#475467] break-words text-lg font-normal mb-4 pl-2