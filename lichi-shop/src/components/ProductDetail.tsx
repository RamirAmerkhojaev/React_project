import React, { ReactElement } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { products } from '../databases/database'

interface Props {
    
}

export default function ProductDetail({}: Props): ReactElement {

    const match = useRouteMatch<{prodId: any}>()
    const product = match.params.prodId;

    const content = products.filter(prd => prd.prd_id == product).map(item => (
        <div>
            <p>{item.prd_name}</p>
            <img src={item.prd_img} alt="error"/>
            <p>{item.prd_description}</p>
            <p>{item.prd_price}</p>
        </div>
    ))
    

    return (
        <>
            <ul>
                {content}
            </ul>
        </>
    )
}
