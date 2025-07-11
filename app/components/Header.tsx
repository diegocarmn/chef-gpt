"use client";

export default function Header() {
  return (
    <header className="bg-white text-white flex items-center justify-center h-24 shadow-md z-10 relative">
        <img className="h-14" src="/chef-gpt-icon.png" alt="" />
        <h1 className="text-gray-900 text-3xl pl-3 font-normal tracking-tighter">Chef GPT</h1>
    </header>
  );
}
