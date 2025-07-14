
"use server";

import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `
Voce é um assistente que recebe uma lista de ingredientes que o usuário tem e sugere uma receita que ele poderia fazer com alguns ou todos esses ingredientes. Você não precisa usar todos os ingredientes mencionados na receita. A receita pode incluir ingredientes adicionais que não foram mencionados, mas tente não incluir muitos ingredientes extras. Formate sua resposta em markdown para facilitar a renderização em uma página da web. Sem mensagem de saudação ou despedida. Apenas forneça a receita.
`

const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Magistral-Small-2506",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Eu tenho ${ingredientsString}. Por favor me de uma receita que você recomenda que eu faça` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}