import React from 'react'

class SearchBar extends React.Component 
{
    render()
    {
        return(
            <div>
                <input type ="text" placeholder ="search" /><br />
                <input type = "checkbox" />Only show in stock
            </div>
        )
    }
}
export default SearchBar
