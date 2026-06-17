export default function Mascot() {
  const mascotSrc = new URL('/mascot.png', import.meta.url).href;

  return (
    <div className="mascot-card">
      <div className="mascot-artboard">
        <img src={mascotSrc} alt="Frontend Detective mascot" className="mascot-image"  />
      </div>
    </div>
  );
}
