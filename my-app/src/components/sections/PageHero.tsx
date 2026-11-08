import type { ReactNode } from "react";
import "./PageHero.css";

type Props = {
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
};

/** Interior-page opening: a large title and one supporting line. */
export default function PageHero({ title, lede, children }: Props) {
  return (
    <section className="ph">
      <div className="x-wrap">
        <h1 className="x-display ph-title">{title}</h1>
        {lede && <p className="x-lede ph-lede">{lede}</p>}
        {children && <div className="ph-extra">{children}</div>}
      </div>
    </section>
  );
}
