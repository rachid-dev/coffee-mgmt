import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById, deleteProduct } from "../../services/products.services";
import HomeHeader from "../../components/HomeHeader";
import Loading from "../../components/Loading";

const ProductProfile = () => {

    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {

        getProductById(id).then((product) => setProduct(product))

    },[id])


    //delete a product
    function handleProductDeletion(){
        deleteProduct(id).then((msg) => {
            console.log(msg)
            navigate('/');
        })
    }

    return(
        <div>
            <HomeHeader />
            {
                product.name?(
                    <div className="container mt-5">
                    <div className="card"><div className="row g-0">
                        <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                            <img
                            src={product?.picture}
                            className="img-fluid rounded-start"
                            alt={product?.name}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{product?.name}</h2>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Price(XOF)</th>
                                            <td>{product?.price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Description</th>
                                            <td>{product?.description}</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-between mt-4">
                                    <button className="btn btn-link text-decoration-none text-warning" onClick={()=>navigate('/')}>
                                        RETOUR
                                    </button>
                                    <button className="btn btn-link text-decoration-none text-warning" onClick={()=> navigate(`/product-edit/${id}`)} >
                                        ÉDITER
                                    </button>
                                    <button className="btn btn-link text-decoration-none text-warning" onClick={handleProductDeletion} >
                                        SUPPRIMER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                ):(
                    <Loading/>
                )
            }
        </div>
    )
}
export default ProductProfile;