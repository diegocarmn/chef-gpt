"use client";

export default function Main() {
  return (
    <main className="bg-stone-100 min-h-[calc(100vh-6rem)]">
      <form
        action=""
        className="pt-10 gap-2 w-full px-16 flex justify-center"
      >
        <input
          type="text"
          className="h-10 bg-white rounded p-3 w-[400px] rounded-lg border border-stone-400 shadow-sm focus:outline-none focus:border-stone-500 "
          placeholder="ex. orégano"
        />
        <button
          type="submit"
          className="bg-black text-white text-sm font-normal py-2 px-12 rounded-lg"
        >
          Add ingredient
        </button>
      </form>
    </main>
  );
}
