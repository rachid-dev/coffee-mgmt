import { useEffect, useState } from "react";
import { StyledLi, Container } from "./style";
import { getAllProducts } from "../../services/products.services";
import SearchBar from "../SearchBar";
import ProductCard from "../ProductCard";
import Loading from "../Loading";



const ProductList = () => {
    const [productList, setProductList] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    let productListFiltered = filterProducts(searchTerm);

    //filter products
    function filterProducts(filter){
        return productList?.filter((product) => (
            product.name
                .toLowerCase()
                .includes(filter.trim().toLowerCase())
        ))
    }


    // Get products from the server
    useEffect(()=>{
    
       getAllProducts().then((products) => {
        setProductList(products);
        setLoading(false);
       }
       
    );

    },[])


    //update search term
    function updateSearchTerm(term){
        setSearchTerm(term);
    }

    

    return(
        <div>
            <SearchBar searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>
            <Container>
                {
                    loading?(
                        <Loading/>
                        
                    ):(
                        productListFiltered?.map(({_id, name, picture, price}) => (
                            <StyledLi key ={_id}>
                                <ProductCard id = {_id}  name = {name} picture = {picture}  price = {price} />
                            </StyledLi>                    
                        ))
                    )
                }
            </Container>
        </div>
    )
}
export default ProductList;