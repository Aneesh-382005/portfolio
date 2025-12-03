import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        Made with ❤️ by Aneesh Grover.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Runs on Next.js, TypeScript, Tailwind & Vercel - feedback is always welcome.
      </p>
      <p className="text-xs mt-2">
        Found an Issue? Raise it here{" "}
        <a
          href="https://github.com/Aneesh-382005/portfolio/issues"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Aneesh-382005/portfolio/issues
        </a>
      </p>
    </footer>
  );
}