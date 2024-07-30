import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center gap-3 p-3 justify-center fixed bottom-0 left-0 text-white w-full bg-gradient-to-r from-red-500 to-orange-500">
      Created By
      <a
        href="https://t.me/IslomPardaboyev"
        className="underline decoration-sky-500 text-sky-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Islom
      </a>
      <span>||</span>
      <p>All Right Reserved</p>
    </footer>
  );
};

export default Footer;
