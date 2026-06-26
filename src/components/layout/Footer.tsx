import Link from "next/link";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Chairs", href: "/products#chairs" },
      { label: "Lounge Chairs", href: "/products#lounge" },
      { label: "Table Bases", href: "/products#tables" },
      { label: "Table Tops", href: "/products#tops" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About 5A", href: "/company" },
      { label: "Sustainability", href: "/company/sustainability" },
      { label: "Designers", href: "/company/designers" },
      { label: "References", href: "/references" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Catalogues", href: "/resources/catalogues" },
      { label: "2D & 3D Drawings", href: "/resources/2d-3d-drawings" },
      { label: "Materials", href: "/materials" },
      { label: "Fabrics", href: "/materials/fabrics" },
      { label: "Finishes", href: "/materials/finishes" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/"><span className="text-3xl font-bold tracking-tight">5A</span></Link>
            <p className="mt-4 text-sm text-[#999] leading-relaxed">
              Manufacturing design chairs and tables since 1986.<br />Istanbul, Turkey.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/5adesign/" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-white text-sm transition-colors">Instagram</a>
              <a href="https://www.facebook.com/5adesign/" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-white text-sm transition-colors">Facebook</a>
              <a href="https://twitter.com/5adesign" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-white text-sm transition-colors">X</a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#777] mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#bbb] hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-[#333] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666]">&copy; {new Date().getFullYear()} 5A Design. All rights reserved.</p>
          <p className="text-xs text-[#666]">Istanbul, Turkey</p>
        </div>
      </div>
    </footer>
  );
}
