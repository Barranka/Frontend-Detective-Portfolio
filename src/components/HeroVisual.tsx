export default function HeroVisual() {
  const imageSrc = new URL('/hero-visual.png', import.meta.url).href;

  return (
    <div className="hero-visual">
      <div className="hero-artboard">
        <img src={imageSrc} alt="Frontend engineering workspace" />
      </div>
    </div>
  );
}
