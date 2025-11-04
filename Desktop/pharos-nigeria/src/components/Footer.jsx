import React from "react";

export default function Footer() {
  return (
    <footer className="bg-pharosGold text-nigeriaGreen p-6 text-center mt-12">
      <p className="font-semibold">&copy; 2025 Pharos Nigeria. All rights reserved.</p>
      <p className="mt-2">
        Follow us on{" "}
        <a
          href="https://twitter.com/PharosNigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Twitter
        </a>{" "}
        |{" "}
        <a
          href="https://discord.com/invite/pharosnigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Discord
        </a>
      </p>
    </footer>
  );
}
