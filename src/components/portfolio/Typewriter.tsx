import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 28 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <p className="text-base text-muted-foreground/90 max-w-[480px] leading-relaxed typewriter-cursor">
      {out}
    </p>
  );
}
