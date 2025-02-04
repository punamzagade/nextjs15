import { Product } from "@/app/components/product";
import { Reviews } from "@/app/components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
