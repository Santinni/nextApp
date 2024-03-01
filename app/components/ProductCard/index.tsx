'use client'

import AddToCartButton from './AddToCartButton';
import styles from './styles.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
        <AddToCartButton/>
    </div>
  )
}

export default ProductCard