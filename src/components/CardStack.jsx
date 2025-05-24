// src/components/CardStack.jsx
export default function CardStack({ images = [] }) {
  // Espera um array de até 3 imagens [{ src, alt }]
  // O primeiro do array será o topo, o último será o fundo

  // Defina as posições para até 3 imagens:
  const offsets = [
    { top: 0, left: 0, z: 30, shadow: "shadow-2xl" },
    { top: 300, left: 12, z: 20, shadow: "shadow-xl" },
    { top: 600, left: 24, z: 10, shadow: "shadow-lg" },
  ];

  return (
    <div className="relative w-[938px] h-[340px] mx-auto mt-12 mb-12 select-none">
      {images.slice(0, 3).reverse().map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`
            absolute
            top-[${offsets[idx]?.top || 0}px]
            left-[${offsets[idx]?.left || 0}px]
            w-[938px] h-[340px]
            rounded-[10px] border-2 border-black bg-white
            ${offsets[idx]?.shadow || ""}
            z-[${offsets[idx]?.z || 1}]
          `}
          style={{
            top: offsets[idx]?.top || 0,
            left: offsets[idx]?.left || 0,
            zIndex: offsets[idx]?.z || 1,
            width: "938px",
            height: "340px",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
}
