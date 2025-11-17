import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import type { AmplexusProduct } from "@/types/product";

interface ProductDetailModuleProps {
  product: AmplexusProduct;
  children?: React.ReactNode;
}

export const ProductDetailModule = ({ product, children }: ProductDetailModuleProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Image */}
      <div className="aspect-square relative bg-shell rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <Heading level={1} className="mb-4">
          {product.title}
        </Heading>
        
        <p className="text-3xl font-bold text-ink mb-6">${product.price.toFixed(2)}</p>

        <Text className="text-slate-600 mb-6">{product.detail}</Text>

        {/* Buy Button Area */}
        {children && (
          <div className="mb-8">
            {children}
          </div>
        )}

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="mb-6">
            <Heading level={3} className="mb-3">
              Benefits
            </Heading>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <Text size="sm">{benefit}</Text>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Care Instructions */}
        {product.care && (
          <div>
            <Heading level={3} className="mb-3">
              Care & Use
            </Heading>
            <Text size="sm" className="text-slate-600">
              {product.care}
            </Text>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-shell rounded-lg border border-slate-200">
          <Text size="sm" className="text-slate-600">
            <strong>Note:</strong> Self-care products are designed to support your wellness journey
            but do not replace professional therapy or crisis services.
          </Text>
        </div>
      </div>
    </div>
  );
};
