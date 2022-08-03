import React from 'react'
import {  Card } from 'react-bootstrap'
import ReactStars from 'react-stars'
import {Button} from 'react-bootstrap';
import { Link} from 'react-router-dom'
const Moviecard = ({movie}) => {

  return (
    <div id='mvcard'>  
        <Card style={{ width: '18rem' ,height: '560px', marginTop:'20px'}}>
    <Card.Img variant="top" src={movie.url} style={{height:"380px"}} />
    <Card.Body>
      <Card.Title><h4>{movie.name}</h4></Card.Title>
      <div   style={{marginTop:'20px'}}>
      <ReactStars
  count={5}
  half={false}
  size={24}
  color2={'#ffd700'} 
  value={movie.rating}
  edit={false}

   />  </div>   
   <Link   to= {`/${movie.id}`} >
         <Button  variant="primary" >Watch Trailer</Button>{' '}
         
   </Link>
    
    </Card.Body>
  </Card>
    

  </div>
  )
}

export default Moviecard