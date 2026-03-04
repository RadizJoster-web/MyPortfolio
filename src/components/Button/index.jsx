export default function Button({ text = "Button", onClick }) {
  return (
    <button className="px-8 py-2 border border-dark text-color-dark rounded-xl font-medium hover:text-color-light hover:bg-color-dark transition-all shadow-lg">
      {text}
    </button>
  );
}
