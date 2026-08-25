"use client";

import { useEffect, useState } from "react";

const TYPING_SPEED = 90;
const ERASING_SPEED = 55;
const PAUSE_AFTER_TYPED = 1400;
const PAUSE_AFTER_ERASED = 300;

export default function TypewriterWord({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const fullyTyped = !isDeleting && text === currentWord;
    const fullyErased = isDeleting && text === "";

    let delay = isDeleting ? ERASING_SPEED : TYPING_SPEED;
    if (fullyTyped) delay = PAUSE_AFTER_TYPED;
    if (fullyErased) delay = PAUSE_AFTER_ERASED;

    const timeout = setTimeout(() => {
      if (fullyTyped) {
        setIsDeleting(true);
        return;
      }
      if (fullyErased) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentWord.slice(0, prev.length + 1),
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span
          className="ml-0.5 inline-block w-[3px] bg-current align-[-0.1em]"
          style={{ height: "0.85em", animation: "blink 1s step-end infinite" }}
        />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
