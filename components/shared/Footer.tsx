import React from 'react';

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 flex w-full justify-between bg-black text-[0.8rem] font-bold">
      <div className="text-whitea grid grid-cols-1">
        <p className="text-[1.25rem]">Midtown Galleria</p>
        <p>Cinema Info</p>
        <p>About Us</p>
        <p>Privary Policy</p>
        <p>MTC Advantage</p>
      </div>

      <div className="grid grid-cols-1 text-white">
        <p className="text-[1.25rem]">Contact Us</p>
        <p>Newroad, Pokahra</p>
        <p>Contact Number: 061-580781, 061-553456</p>
        <p>Email ID : marketing@midtown.com.np</p>
      </div>
    </footer>
  );
}
