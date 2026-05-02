import type { ReactNode, CSSProperties } from "react";

type Props = {
  /** Grid columns. Defaults to 3 (phone gallery). Use 1 for a single wide desktop screen. */
  columns?: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
};

/**
 * Shared "screens inside a zinc frame" treatment used for case-study hero imagery.
 * - `columns={3}` — phone gallery (autobahn)
 * - `columns={1}` — single desktop screenshot (disputes360)
 */
export default function ScreenShowcase({ columns = 3, children, className = "" }: Props) {
  const style: CSSProperties | undefined =
    columns !== 3 ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : undefined;

  return (
    <div className={`content-col-narrow screen-gallery${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
