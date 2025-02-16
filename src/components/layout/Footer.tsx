import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider">FIRST RUBBER</h2>

          <p className="text-sm md:text-base leading-relaxed opacity-90">
            Content de............................................ footer e boshbe
          </p>

          <Link
            href="#"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Know More
          </Link>
        </div>
      </div>
    </footer>
  )
}

