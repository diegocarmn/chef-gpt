import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props: { recipe: string }) {
  return (
    <section className="px-5 py-10 max-w-148 mx-auto" aria-live="polite">
      <h2 className="text-3xl font-semibold text-stone-950 mb-6">
        SaborIA recomenda:
      </h2>
      <article className="prose prose-stone-900 prose-strong:text-lg prose-strong:text-[#475467] prose-strong:font-bold prose-li:text-[#475467] prose-p:text-[#475467] prose-headings:text-[#475467] prose-headings:font-bold">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}
