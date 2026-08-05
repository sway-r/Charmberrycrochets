type MarqueeProps = {
  text: string;
};

export function Marquee({ text }: MarqueeProps) {
  return (
    <div
      aria-hidden="true"
      className="group relative flex overflow-hidden border-y border-border py-5"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 font-display text-2xl italic tracking-tight text-rose/70 sm:text-3xl"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
