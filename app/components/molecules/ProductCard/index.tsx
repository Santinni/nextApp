"use client"

import AddToCartButton from "./AddToCartButton"
import styles from "./styles.module.css"

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h2>Product</h2>
      <AddToCartButton />
    </div>
  )
}

export default ProductCard
