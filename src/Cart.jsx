import React from 'react';
import Nav from './Nav';
import Button from 'react-bootstrap/Button';
import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useCart } from 'react-use-cart';
function Cart() {
  const {
  isEmpty,
  totalUniqueItems,
  items,
  totalItems,
  cartTotal,
  updateItemQuantity,
  removeItem,
 
  } = useCart();
  if(isEmpty){ 
    
    
    return( 
      
        <>
      <Nav/>
    <h1>Your Cart is Empty</h1>
    </>
    )}
  return (

    <>
        
     <Nav totalItems={totalItems}/>
    

      <h4>Item : ({totalUniqueItems}) </h4>
      <h4>Total Items : ({totalItems}) </h4>
      <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Bag
                  </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price ($)</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {console.log(items)}
{items.map((item,index)=>{
  return(
                <tr key={index}>
                  <td scope="row">
                   
                      <img
                        src={item.thumbnail}
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="product"
                      /> </td>
                      <td className="align-middle">
                        <p className="mb-2">{item.title}</p>
                      </td>
                    
                 
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                    {item.category}
                    </p>
                  </td>
                  <td className="align-middle">
                  <Button variant="success" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</Button>
                 
                 {item.quantity}
                 
                  <Button variant="warning" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</Button>




                 
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                    {item.price}
                    
                    </p>
                  </td>
                  <td className="align-middle">
                  <Button variant="danger" onClick={()=>removeItem(item.id)}>DELETE</Button>
                  </td>
                </tr>)
}) }
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          
          <MDBCard
            className="shadow-2-strong mb- mb-lg-0"
            style={{ borderRadius: "16px",alignItems:"center"}} 
          >
          
           
                    <p className="mb-2"><h3>Total ($)</h3> </p>
                    <p className="mb-2"><h3>{cartTotal}</h3></p>
                 

                    <Button variant="dark">Checkout</Button>
             
            
          </MDBCard>
         
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
}

export default Cart;