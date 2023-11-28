import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
//grabbing product data using context
const Product = () =>  {
 const {all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId));
//we will convert the productId to number
  return (
    <div>
<Breadcrum product={product}/>
<ProductDisplay product={product} />
<DescriptionBox/>
<RelatedProducts/>
    </div>
  )
  }

export default Product