import './ProductsPage.css'

import ProductsList from '../ProductsList/ProductsList'

const ProductsPage = () => {
    return (
        <div className="ProductsPage">

            <h1>Productos</h1>

            <hr />

            <ProductsList />
        </div>
    )
}

export default ProductsPage