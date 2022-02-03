import React,{useEffect} from 'react'
import { Grid, Image } from 'semantic-ui-react'
import SingleProduct from "./SingleProduct"
import {useDispatch,useSelector} from "react-redux";
import { getProducts } from '../thunks';


function AllProducts() {
  const dispatch = useDispatch();
  const products=useSelector(state=>state.ecom.products)

useEffect(() => {
  dispatch(getProducts(10));
 
}, [])

    return (
        <Grid columns={3} divided>
        <Grid.Row>

        {
          products.length>0?
              products[0].map(ele=>(
                <Grid.Column>
     
                       <SingleProduct  image={ele.image} price={ele.price} id={ele.id} title={ele.title}/>

           
                </Grid.Column>

              )):""
            }
        
       
        </Grid.Row>
    
      
      </Grid>
    )
}

export default AllProducts
