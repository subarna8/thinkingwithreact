import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component
{
    render()
    { const product = this.props.product;
        const rows = [];
        if(product.length >0)
        {
            rows.push(<ProductCategoryRow category = {product[0].category} />);
            rows.push(<ProductRow name = {product[0].name} price = {product[0].price} />);
            
        
            for (let i=0; i<product.length -1; i++)
            {
                {((i + 1 !== product.length) && (product[i].category !== product[i+1].category)) && 
                        rows.push(<ProductCategoryRow category = {product[i+1].category} />)
                        }
                rows.push(<ProductRow name = {product[i+1].name} price = {product[i+1].price} />)
                    
                
            }
        }
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>Price</strong></td>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}
export default ProductTable