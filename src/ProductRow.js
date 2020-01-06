import React from 'react'

class ProduuctRow extends React.Component 
{
    render()
    {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}


export default ProduuctRow
