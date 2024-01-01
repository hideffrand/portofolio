export default function ColorPalette() {
  const colors: string[] = ["green", "red", "purple", "white"];

  return (
    <div className="flex gap-10">
      {colors.map((color, i) => (
        <div key={i} className={`w-2 h-2 bg-${color}`}></div>
      ))}
    </div>
  );
}
