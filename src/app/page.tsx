import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";

const featuredProducts = [
  { name: "MARA", category: "Wooden Chairs", href: "/product/mara", description: "Crafted from kiln-dried beech wood, the Mara chair combines comfort and elegance with a carefully upholstered backrest and seat.", bg: "#e8e2d8" },
  { name: "MADDY", category: "Wooden Chairs", href: "/product/maddy", description: "Pure natural beech wood with graceful curves. UV-protected, eco-friendly water-based paints and a wide range of upholstery options.", bg: "#dfd8cc" },
  { name: "GLOBE", category: "Chairs", href: "/product/globe-armchair-5-ways", description: "An armchair, lounge chair and couch in one family — welcoming, comfortable, and available in multiple base configurations.", bg: "#d8d2c8" },
  { name: "GALA", category: "Dining Chairs", href: "/product/gala-collection", description: "A new benchmark in contract furniture. Wider back and seat for excellent comfort, with sliced threads adding a unique touch.", bg: "#e2ddd4" },
  { name: "MIA", category: "Lounge Chairs", href: "/product/mia-collection", description: "A wide variety of solutions: dining chair (M & XL), lounge chair for relaxation, and bar chair for elevated seating.", bg: "#dad4c8" },
  { name: "JUMBO", category: "Benches", href: "/product/jumbo", description: "Ergonomic bench family that transitions seamlessly between cafes, restaurants, offices, lounges, and waiting areas.", bg: "#d4cfc4" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        <section className="relative min-h-[90vh] flex items-center bg-[#f7f5f0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-medium mb-6">Since 1986 · Istanbul, Turkey</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-[1.05] tracking-tight">
                Manufacturing<br /><span className="text-[#c8a96e]">design</span><br />chairs &amp; tables
              </h1>
              <p className="mt-8 text-lg text-[#555] leading-relaxed max-w-md">A family company based in Istanbul. We design and manufacture contract furniture for hospitality, offices, and public spaces — distributed across Europe, the Americas, Scandinavia, Africa, Arabia, and Russia.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/products" className="bg-[#1a1a1a] text-white px-8 py-3.5 text-sm tracking-wide hover:bg-[#333] transition-colors">Explore Products</Link>
                <Link href="/collections" className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3.5 text-sm tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors">View Collections</Link>
              </div>
            </div>
            <div className="hidden lg:flex aspect-[4/5] bg-[#e8e2d8] items-center justify-center">
              <div className="text-center">
                <div className="text-[10rem] font-bold text-[#d0c8bc] leading-none">5A</div>
                <p className="text-[#b0a898] text-sm uppercase tracking-widest mt-2">Design Furniture</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] text-white py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{n:"1986",l:"Founded"},{n:"40+",l:"Years of experience"},{n:"6",l:"Continents served"},{n:"100+",l:"Product models"}].map((s)=>(
              <div key={s.l}><div className="text-3xl font-bold text-[#c8a96e]">{s.n}</div><div className="text-xs uppercase tracking-widest text-[#999] mt-1">{s.l}</div></div>
            ))}
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] mb-2">Featured</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Design Products</h2>
            </div>
            <Link href="/products" className="hidden sm:inline text-sm border-b border-[#1a1a1a] hover:text-[#c8a96e] hover:border-[#c8a96e] transition-colors pb-0.5">All Products →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((p)=><ProductCard key={p.name} name={p.name} category={p.category} href={p.href} description={p.description} imagePlaceholder={p.bg} />)}
          </div>
        </section>

        <section className="bg-[#f7f5f0] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] mb-2">Browse by</p>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10">Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{label:"Chairs",href:"/products#chairs",count:"20+"},{label:"Lounge",href:"/products#lounge",count:"8+"},{label:"Table Bases",href:"/products#tables",count:"10+"},{label:"Table Tops",href:"/products#tops",count:"6+"}].map((c)=>(
                <Link key={c.label} href={c.href} className="group bg-white border border-[#e8e4dc] p-8 flex flex-col items-center text-center hover:border-[#c8a96e] transition-all">
                  <span className="font-semibold text-[#1a1a1a] group-hover:text-[#c8a96e] transition-colors">{c.label}</span>
                  <span className="text-xs text-[#999] mt-1">{c.count} products</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] mb-4">About 5A</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-snug">A family company crafting furniture for the world</h2>
            <p className="mt-6 text-[#555] leading-relaxed">5A carries out all production activities in Istanbul, distributing to projects on different continents — Europe, the U.S.A., Scandinavia, Africa, Arabia, and Russia.</p>
            <p className="mt-4 text-[#555] leading-relaxed">We work on projects of different scales: cafes, restaurants, hotels, retail showrooms, shopping malls, educational centers, residential buildings, and corporate headquarters.</p>
            <p className="mt-4 text-[#555] leading-relaxed">Sustainability is core to everything we do — minimizing environmental impact from supply to production, packaging, and logistics.</p>
            <div className="mt-8"><Link href="/company" className="text-sm border-b border-[#1a1a1a] hover:text-[#c8a96e] hover:border-[#c8a96e] transition-colors pb-0.5">Learn more about us →</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-[#e8e2d8]" />
            <div className="aspect-[3/4] bg-[#dfd8cc] mt-8" />
          </div>
        </section>

        <section className="bg-[#1a1a1a] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] mb-4">Materials</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">A broad range of customisation options</h2>
              <p className="mt-6 text-[#999] leading-relaxed">The 5A Collections are produced with care and attention to every detail. We use wood, metal, marble, fabric, and leather.</p>
              <p className="mt-4 text-[#999] leading-relaxed">Upholstery options include artificial leather, velvet, woven fabric, linen, genuine leather, bouclé, and nubuck.</p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/materials/fabrics" className="text-sm border-b border-[#c8a96e] text-[#c8a96e] hover:text-white hover:border-white transition-colors pb-0.5">Browse Fabrics →</Link>
                <Link href="/materials/finishes" className="text-sm border-b border-[#c8a96e] text-[#c8a96e] hover:text-white hover:border-white transition-colors pb-0.5">Browse Finishes →</Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[{label:"Oak Wood",color:"#c8a96e"},{label:"Beech",color:"#d4b87a"},{label:"Walnut",color:"#7a5c3c"},{label:"Marble",color:"#e8e4e0"},{label:"Metal",color:"#888"},{label:"Velvet",color:"#5c6b7a"}].map((m)=>(
                <div key={m.label} className="aspect-square flex flex-col">
                  <div className="flex-1" style={{backgroundColor:m.color}} />
                  <p className="text-xs text-[#999] mt-1.5 text-center">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] mb-4">References</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">Trusted by leading hospitality brands</h2>
          <p className="text-[#555] max-w-xl mx-auto leading-relaxed mb-10">From intimate cafes to landmark hotels, 5A furniture is specified by designers and architects worldwide.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {["Restaurants","Hotels","Offices","Retail","Education"].map((r)=><span key={r} className="text-sm border border-[#e8e4dc] text-[#444] px-5 py-2">{r}</span>)}
          </div>
          <Link href="/references" className="inline-block bg-[#1a1a1a] text-white px-10 py-3.5 text-sm tracking-wide hover:bg-[#333] transition-colors">View References</Link>
        </section>

        <section className="bg-[#f7f5f0] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
            {[{title:"Catalogues",desc:"Download the latest collection catalogues and material swatch books.",href:"/resources/catalogues"},{title:"2D & 3D Drawings",desc:"Technical data files for product families ready for your project planning.",href:"/resources/2d-3d-drawings"},{title:"Price List",desc:"Request the current price list for contract and trade inquiries.",href:"/resources"}].map((item)=>(
              <Link key={item.title} href={item.href} className="group bg-white border border-[#e8e4dc] p-8 hover:border-[#c8a96e] transition-all">
                <h3 className="font-semibold text-lg text-[#1a1a1a] group-hover:text-[#c8a96e] transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666] leading-relaxed">{item.desc}</p>
                <span className="mt-4 inline-block text-xs text-[#c8a96e] uppercase tracking-widest">Download →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#c8a96e] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Discover our new catalogue</h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">Get the latest 5A collection catalogue and stay up to date with new product launches.</p>
            <Link href="/resources/catalogues" className="inline-block bg-white text-[#1a1a1a] px-10 py-3.5 text-sm font-semibold tracking-wide hover:bg-[#f0ede8] transition-colors">Get Catalogue</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
