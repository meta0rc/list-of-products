import * as products from '../../data/productsCategory.json'
import { useContext, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { ButtonFilter, buttonActive, buttonDesactive, ListFilter, FilterItem, Filter as FilterContainer } from "./style"
import { Context } from '../../context/fitler'

export const Filter = () => {

    const [drop, setDrop] = useState(false)
    const FilterContext = useContext(Context)
    const Products = products.data.nodes
    const categorys = Products.map(product => product.category.name)
    const categoryFilter = categorys.filter((product, index) => categorys.indexOf(product) === index)

    const updateDrop = () => {
        if(drop === false){
            setDrop(true)
        }
        else {
            setDrop(false)
        }
    }
    return (

        <FilterContainer>
            <ButtonFilter onClick={updateDrop} title={'Change any category to filter products'}>
                <p>{FilterContext.filter != '' ? FilterContext.filter : 'Categorias' }</p>
                <BsChevronDown style={drop !== false ? buttonActive : buttonDesactive }/>
            </ButtonFilter>
            { drop !== false && (
                <ListFilter>
                {categoryFilter.map(cat => {
                    return (
                        <FilterItem
                            key={cat}
                            onClick={() => { 
                                FilterContext.updateFilter(cat)
                                setDrop(false)
                                }}>
                                { cat }
                        </FilterItem>
                    )
                })}
                    <FilterItem onClick={
                        () => {
                            FilterContext.updateFilter('')
                            setDrop(false)
                        }}>
                       Ver Todos
                    </FilterItem>
                </ListFilter>
            )}
        </FilterContainer>
    )
}