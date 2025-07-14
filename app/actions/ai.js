"use server";

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
Você é um assistente que recebe uma lista de ingredientes que o usuário tem e sugere uma receita que ele poderia fazer com alguns ou todos esses ingredientes. Você não precisa usar todos os ingredientes mencionados na receita. A receita pode incluir ingredientes adicionais que não foram mencionados, mas tente não incluir muitos ingredientes extras. Formate sua resposta em markdown para facilitar a renderização em uma página da web. Sem mensagem de saudação ou despedida. Apenas forneça a receita. Resuma em 1024 tokens ou menos.
`;

export async function getRecipeFromGroq(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Eu tenho ${ingredientsString}. Por favor me dê uma receita que você recomenda que eu faça.`,
        },
      ],
      max_tokens: 1024,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || null;
  } catch (error) {
    console.error("Erro ao gerar receita com Groq:", error.message);
    return null;
  }
}
