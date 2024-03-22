import { Metadata } from "next/types"

interface ProductPageProps {
  params: {
    slug: string[]
  }
  searchParams: {
    sortOrder: string
  }
}

const ProductPage = (props: ProductPageProps) => {
  const {
    params: { slug },
    searchParams: { sortOrder },
  } = props
  return (
    <div>
      ProductPage: {slug ? slug.join(", ") : "No products"} {sortOrder}
    </div>
  )
}

export default ProductPage

export const metadata: Metadata = {
  title: "Product",
  description: "Product",
  keywords: "Product",
}

//TODO: generate metadata - fetch data from our api and return title description and keywords based on that data

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("https://api.example.com/products")
//   return {
//     title: product.title,
//     description: product.description,
//     keywords: product.keywords,
//   }
// }
