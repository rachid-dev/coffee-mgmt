import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader";
import {getProductById, updateProduct } from "../../services/products.services";
import Loading from "../../components/Loading";

const ProductEdit = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState({ preview :{ src :'', alt:''}, data:'' })
    const {id} = useParams()


    // get the product we want to modify
    useEffect(() => {

        getProductById(id).then((product) => {
            setName(product?.name)
            setPrice(product?.price)
            setDescription(product?.description)
            const img = {
                preview : {
                    src : product?.picture,
                    alt : product?.name
                },
                data : ''
            }
            setImage(img)
        }).catch((err)=> console.log(err))

    },[id])



    function uploadImage(){
        const imgInp = document.getElementById('imgInp')
        imgInp.click()       
    }


    function handleImageUploading (e){
        const uploadedImg = e.target.files[0]
        if (uploadedImg) {
            const img = {
                preview : {
                    src : URL.createObjectURL(uploadedImg),
                    alt : uploadedImg.name
                },
                data : uploadedImg
            }
            setImage(img)
        }
    }


    //update product
    function handleSubmition(e) {
        e.preventDefault();
        const info = {
            name,
            price,
            description
        }
        
        const product = new FormData()
        product.append('image', image.data)
        product.append('product',JSON.stringify(info))

        updateProduct(product, id).then(() => navigate(`/product-profile/${id}`));
    }


    return(

        <div>
            <HomeHeader />
            {
                name!==''?(
                    <div className="container mt-5">
                        <div className="card">
                            <div className="row g-0">
                                <div
                                className="col-md-4 d-flex align-items-center justify-content-center bg-light"
                                >
                                <img
                                    src={image.preview.src}
                                    className="img-fluid rounded-start"
                                    alt={image.preview.alt}
                                />
                                </div>
                                <div className="col-md-8">
                                <form onSubmit={handleSubmition} >
                                    <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>
                                            <input
                                                type="text" className="form-control text-center" 
                                                placeholder="Nom du Produit"
                                                value={name} onChange={(e)=> setName(e.target.value)}
                                                required
                                            />
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Price (XOF)</th>
                                            <td>
                                            <div className="input-group">
                                                <button type="button" className="btn btn-outline-secondary" >
                                                -
                                                </button>
                                                <input
                                                type="number"
                                                className="form-control text-center"
                                                value={price} onChange={(e)=> setPrice(e.target.value)}
                                                required
                                                />
                                                
                                                <button type="button" className="btn btn-outline-secondary">
                                                +
                                                </button>
                                                
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Description</th>
                                            <td>
                                            <div className="input-group">
                                                
                                                <textarea
                                                type="text"
                                                className="form-control"
                                                rows={5}
                                                value={description} onChange={(e)=> setDescription(e.target.value)}
                                                ></textarea>
                                                
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={ uploadImage } 
                                                >
                                                    Edit image
                                                </button>
                                                <input id="imgInp" onChange={ handleImageUploading }  type= {'file'} accept='image/*'  hidden/>

                                            </td>
                                        </tr>
                                        
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-between mt-4">
                                        <button
                                        className="btn btn-link text-decoration-none text-warning"
                                        onClick={()=>navigate(-1)}
                                        >
                                        RETOUR
                                        </button>
                                        <input 
                                        type="submit" 
                                        className="btn btn-link text-decoration-none"
                                        value="SAUVEGARDER LES CHANGEMENTS"
                                        
                                        />
                                    </div>
                                    </div>
                                </form>
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

export default ProductEdit;