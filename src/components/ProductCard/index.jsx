import { Link } from "react-router-dom";
import { ProductContainer, StyledImg } from "./style";


const ProductCard = ({id, name, picture, price}) => {
    const formatedPrice = new Intl.NumberFormat().format(price)
    return(
        <ProductContainer>
            <Link to= {`/product-profile/${id}`} >
                <StyledImg src={picture} alt = {name} />
            </Link>
            <span>{ `Nom : ${name}` } <br/></span>
            <span>{`Prix : ${formatedPrice} fcfa`}</span>
        </ProductContainer>
    )
}


export default ProductCard;