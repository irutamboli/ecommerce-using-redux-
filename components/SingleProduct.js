import React,{useState} from 'react'
import { Card,Button,Image} from 'semantic-ui-react'
import {addToCart} from "../reducers"
import { useDispatch } from 'react-redux'

const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'
function SingleProduct({image,title,price,id}) {
  const [quantity,setQuantity]=useState(0);
  const dispatch = useDispatch();
    const addToCart2=(product)=>{

      /// Action dispatch add to cart
      dispatch(addToCart(product))

    }
    return (
        <>
          <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{price}</Card.Meta>
      <Card.Description>
      <Button icon='plus'  onClick={()=>setQuantity(quantity+1)}/>
      <span style={{fontSize:"20px"}} >{quantity}</span>
      <Button icon='minus' onClick={()=>quantity>0?setQuantity(quantity-1):""} />
      </Card.Description>
    
    </Card.Content>
    <Card.Content extra>
  
    <Button content='Add to Cart' primary onClick={()=>addToCart2({id,title,image,quantity,price})} />

    </Card.Content>
  </Card>

 

   

        </>
    )
}

export default SingleProduct
