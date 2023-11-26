import headerOptions from '@/helpers/headerOptions';
import React from 'react';

export default function Header() {
  return (
    <header className="flex h-[5vh] w-full justify-between bg-black text-white">
      <ul className="flex w-2/5 items-center justify-between pl-16">
        {headerOptions.map((option) => (
          <li key={option.id}>{option.option}</li>
        ))}
      </ul>
      <div className="w-1/5 text-center ">MIDTOWN</div>
      <div className="w-2/5 pr-16">
        <p className="text-right">Login</p>
      </div>
    </header>
  );
}
