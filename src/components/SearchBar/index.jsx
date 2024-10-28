import { Div } from "./style";

const SearchBar = ({searchTerm, updateSearchTerm}) => {
    return(
        <Div>
            <label htmlFor="search" >Rechercher</label>
            <div>
                <input
                    id="search"
                    type="text"
                    name="searchTerm"
                    className = "form-control"
                    placeholder="Rechercher un produit"
                    value={searchTerm}
                    onChange={(e) => updateSearchTerm(e.target.value)}
                />  
            </div>
        </Div>
    )
}
export default SearchBar;