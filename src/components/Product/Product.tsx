import { useState } from "react"

import { 
    Button,
    ProductDescription, 
    ProductImage, 
    ProductItem, 
    ProductName 
} from "./style"

type ProductType = {
    id: any
    name: string,
    image: string, 
    category: string,
    description: string
}
export const Product = (props: ProductType) => {

    const [description, setDescription] = useState(false)

    const DropDescription = () => {

        if(description === false){
            setDescription(true)
        }
        else {
            setDescription(false)
        }
    }
    return (
        <ProductItem key={props.name}>
            <ProductImage src={props.image} key={props.image} width="200" loading="lazy"/>
            <ProductName>
                { props.name }
            </ProductName>
            <ProductDescription>
                { description === true && props.description }
            </ProductDescription>
            <Button onClick={DropDescription}>
                { description === false ? 'Ler mais' : 'Ler menos'}
            </Button>
        </ProductItem>
    )

}