"use client";

export default function Header() {
  return (
    <header className="bg-white text-white flex items-center justify-center h-24 shadow-sm z-10 relative">
      <img className="h-14" src="/saboria-icon.svg" alt="" />
      <h1 className="text-stone-950 text-3xl pl-3 font-normal tracking-tighter">
        SaborIA
      </h1>
    </header>
  );
}
