import React from "react";

const Search = (props) => {
    return (
        <div className="col col-sm-4 ">
            <input className="form-control" 
            placeholder="Entrez le nom du film"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}
    export default Search;