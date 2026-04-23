import { A } from "./components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">
        Christ Abessolo (
        <A target="_blank" href="https://www.linkedin.com/in/christ-rova/">
          @rova
        </A>
        )
      </div>
      <div className="flex items-center gap-3">
        <A target="_blank" href="https://github.com/christrova">
          GitHub
        </A>
        <A target="_blank" href="https://github.com/RovaEncoder/portfolio">
          Source
        </A>
      </div>
    </footer>
  );
}
