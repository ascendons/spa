import React, { useEffect, useRef, useState } from "react";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string; // company logo / image (bigger & left)
};

type Props = {
  testimonials: Testimonial[];
  intervalMs?: number;
};

const TestimonialsCarousel: React.FC<Props> = ({
  testimonials,
  intervalMs = 6000,
}) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const count = testimonials.length;

  // Start interval (advances index). Pause/resume handled by mouse/focus handlers.
  useEffect(() => {
    if (count === 0) return;
    start();
    return stop;
    // only restart when interval or count changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, count]);

  function start() {
    stop();
    // use setInterval to avoid re-registering on every index change
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
  }

  function stop() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function go(i: number) {
    stop();
    setIndex(((i % count) + count) % count); // normalize negative values
  }

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className="testimonials"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      ref={containerRef}
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={start}
    >
      <div
        className="testimonials-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, idx) => (
          <figure
            key={t.id}
            className="testimonial-card"
            aria-hidden={index !== idx}
            data-visible={index === idx}
          >
            {/* LEFT: Company image (larger) */}
            <div className="testimonial-image-wrap" aria-hidden>
              <img
                src={t.avatarUrl}
                alt={`${t.author} — ${t.role ?? ""} (company logo)`}
                className="testimonial-image"
                loading="lazy"
                width={240}
                height={120}
              />
            </div>

            {/* RIGHT: Quote + Attribution */}
            <div className="testimonial-body">
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>

              <figcaption className="testimonial-attrib">
                <div>
                  <strong className="attrib-author">{t.author}</strong>
                  {t.role && <div className="attrib-role">{t.role}</div>}
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      <div className="controls">
        <button
          aria-label="Previous testimonial"
          className="control-btn"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>

        <div className="dots" role="tablist" aria-label="Testimonial pages">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>

        <button
          aria-label="Next testimonial"
          className="control-btn"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
