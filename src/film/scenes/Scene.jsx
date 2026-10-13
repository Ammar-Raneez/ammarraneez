// One film scene: the era, slate title and year live on the section for the top bar to read.
// `[data-pin]` marks the part that holds on desktop; `after` flows below it (instruments).
export default function Scene({ scene, className = "", pin = true, after, children }) {
  return (
    <section
      id={scene.id}
      className={`scene scene--${scene.id} ${className}`.trim()}
      data-scene={scene.num}
      data-era={scene.era}
      data-title={scene.title}
      data-year={scene.year}
      aria-label={scene.title}
    >
      <div className="stage" data-pin={pin ? "" : undefined}>
        {children}
      </div>
      {after && <div className="scene__after">{after}</div>}
    </section>
  );
}
