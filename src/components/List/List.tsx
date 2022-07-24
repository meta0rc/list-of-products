import * as products from '../../data/productsCategory.json'
import { useContext } from "react"
import { Product } from "../Product/Product"
import {
    ContainerProducts, 
    Headding, 
    HeaderProducts, 
    ProductsList 
} from "./style"

import { Filter } from '../Filter/Filter'
import { Context } from '../../context/fitler'

export const List = () => {

    const FilterContext = useContext(Context)
    const Products = products.data.nodes
    const ListProducts = FilterContext.filter != '' ? Products.filter(product => product.category.name === FilterContext.filter) : Products


    return (    
        <ContainerProducts>
            <HeaderProducts>
                <Headding >
                    Products 
                </Headding>
                <Filter />
            </HeaderProducts>
            <ProductsList>
                { ListProducts.map(product => { 
                    const imageProduct = product.images[0].asset.url
                    const categoryProduct = product.category.name
                    return (
                        <Product 
                            key={product.name}
                            name={product.name}
                            description={product.shortDescription}
                            image={imageProduct}
                            id={product.id}
                            category={categoryProduct}
                        />
                    )
                })}
            </ProductsList>
        </ContainerProducts>
    )
}