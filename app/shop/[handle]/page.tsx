import { notFound } from "next/navigation";
import { ProductTemplate } from "@/components/templates/ProductTemplate";
import { products } from "@/config/products.config";
import { generateMetadata as genMeta } from "@/lib/seo";

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = products.find((p) => p.handle === handle);
  
  if (!product) {
    return genMeta({
      title: "Product Not Found",
      description: "The product you're looking for could not be found.",
      path: `/shop/${handle}`,
      noIndex: true,
    });
  }

  return genMeta({
    title: product.title,
    description: product.summary,
    path: `/shop/${handle}`,
  });
}

export async function generateStaticParams() {
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = products.find((p) => p.handle === handle);

  if (!product) {
    notFound();
  }

  return <ProductTemplate product={product} />;
}
