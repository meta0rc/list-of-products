import styled from "styled-components"

export const ProductItem = styled.li`
    display: flex; 
    flex-direction: column;
    width: 250px;
    margin: 5px;
    box-shadow: 0 0 3px #ccc;
    border-radius: 3px;
    padding: 5px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    
`
export const ProductName = styled.span`
    font-size: 1.1em;
    font-weight: 300;
    text-align: center;
`

export const ProductDescription= styled.p`
    font-size: 0.8em;
    text-align: center;
    padding: 5px;
    margin: 5px;
`

export const ProductImage = styled.img``

export const ContainerButton = styled.div`
    position: relative;
`
export const Button = styled.button`
    background: #000;
    color: #fff;
    padding: 10px;
    width: 200px;
    margin: 11px;
    border-radius: 3px;
    &:hover {
        cursor: pointer;
        background: #673ab7;
    }
`
