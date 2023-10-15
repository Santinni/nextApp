import React from "react";

interface ProductPageProps {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: ProductPageProps) => {
  return (
    <div>
      ProductPage: {slug ? slug.join(", ") : "No products"} {sortOrder}
    </div>
  );
};

export default ProductPage;
