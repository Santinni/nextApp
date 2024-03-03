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
