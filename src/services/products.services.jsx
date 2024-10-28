import { useContext } from "react";
import { userDataContext } from "../utils/Context";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PRODUCTS_URI = `${API_BASE_URL}/products`;

let token;


//The Component that will allows us to access the userData value
export const ProductServices = () => {
    const {userData} = useContext(userDataContext);
    token = userData.token
       
}

// return all products from the server
export function getAllProducts(){

    return fetch(PRODUCTS_URI,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            // 'Accept' : 'Application/json',
            // 'Content-Type' : 'Application/json'
        }
    })
        .then( res => {
            return res.json()
        })
        .then((data) => {
            return data;
        })
        .catch( error => ( console.log(error) ))
    

}

//return one product by id
export function getProductById(id){

    return fetch(`${PRODUCTS_URI}/${id}`,{
        method : 'GET',
        headers : {
            'Authorization' : `Bearer ${token}`,
            // 'Accept' : 'Application/json',
            // 'Content-Type' : 'Application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {return data})
    .catch(error => console.log(error))
}

//update one product
export function updateProduct(product, id){
    return fetch(`${PRODUCTS_URI}/${id}`,{
        method : 'PUT',
        headers : {
            'Authorization' : `Bearer ${token}`,
            // 'Accept' : 'Application/json',
            // 'Content-Type' : 'formdata'
        },
        body :  product
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch(error => console.log(error))
}


//create one product
export function saveProduct(product){

    return fetch(PRODUCTS_URI,{
        method : 'POST',
        headers : {
            'Authorization' : `Bearer ${token}`,
            // 'Accept' : 'Application/json',
            // 'Content-Type' : 'Application/json'
        },
        body :  product
    })
    .then(res => res.json())
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log(err);
        const span = document.createElement('span')
        const newContent = document.createTextNode(err)
        span.appendChild(newContent)
    })
}

//delete one product
export function deleteProduct(id){
    return fetch(`${PRODUCTS_URI}/${id}`,{
        method : 'DELETE',
        headers : {
            'Authorization' : `Bearer ${token}`,
            // 'Accept' : 'Application/json',
            // 'Content-Type' : 'Application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {return data})
    .catch(error => console.log(error))
}