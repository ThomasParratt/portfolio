
export default function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Thomas Parratt — Built with React + Vite
      </div>
    </footer>
  );
}
