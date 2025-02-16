import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider">FIRST RUBBER</h2>

          <p className="text-sm md:text-base leading-relaxed opacity-90">
            Hebei First Rubber Medical Technology Co., Ltd, as one of the main subsidiaries of Desheng Investment Group,
            is established in 1965 with a 150,000 square meters factory area which is located in Zhengding Technology
            Industrial Park, Hebei, China. Accumulated more than 57 years' experience and with a total investment of
            CNY550 million, First Rubber is the researcher and manufacturer of the first Butyl rubber stopper in China.
            With an annual output of 10 billion pcs rubber stoppers, First Rubber is one of the leading manufacturers
            with standardization and specialization in Asia, with certificates U.S. DMF FDA, GMP(ISO 15378), ISO,
            etc.The company's products include:bromobutyl rubber stopper,Eurocap for infusion,Wholesale lyo stopper
            price,serum separator tubes supplier,slurry pump impeller,Cheapest rubber bulb for dropper,Best butyl rubber
            for infusion, etc.
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

