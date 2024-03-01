import React from 'react';

import Button from '../../Button';

const AddToCartButton = () => {
  return (
    <Button onClick={()=>alert('Add to cart')}>
        Add to cart
    </Button>
  )
}

export default AddToCartButton