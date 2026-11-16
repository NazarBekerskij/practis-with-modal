import { Component } from "react";


class Search extends Component{
    render(){
        const {value, onSearch} = this.props
        return(
            <div>
                <input 
                type="text" 
                placeholder="Search contacts..." 
                value={value} 
                onChange={onSearch}/>
            </div>
        )
    }
}

export default Search