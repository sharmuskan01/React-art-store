import React, {Component} from 'react';
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from '../context';
import bg from '../bg-img2.jpg'; 

export default class ProductList extends Component{
    
    render(){
        
        return (
            <React.Fragment>
            <div className="py-5">
            <div className="container">
            <div className="fade-in">
            <h1 className="display-3" align="center">World of Art</h1>
            <img src={bg} alt="Image" width="100%"/>
            </div>
            <Title title="our products" />
            <div className="row">
                <ProductConsumer>
                    {value => {
                        return value.products.map( product =>{
                            return <Product key={product.id} product={product}/>
                        })
                    }}
                </ProductConsumer>
            </div>
            </div>
            </div>
            </React.Fragment>
           // <Product></Product>
            
        );
    }
}