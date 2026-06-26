import Link from "next/link";

interface ProductCardProps {
  name: string;
  category: string;
  href: string;
  description?: string;
  imagePlaceholder?: string;
}

export default function ProductCard({
  name,
  category,
  href,
  description,
  imagePlaceholder,
}: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="aspect-square overflow-hidden relative">
        <div
          className="w-full h-full"
          style={{ backgroundColor: imagePlaceholder || "#f0ede6" }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="mt-3">
        <p className="text-xs uppercase tracking-widest text-[#999]">{category}</p>
        <h3 className="mt-1 text-base font-semibold text-[#1a1a1a] group-hover:text-[#c8a96e] transition-colors">
          {name}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-[#666] line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
}
