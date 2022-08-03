
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import {Navbar,Nav, Container } from 'react-bootstrap';


export const Trailer = ({movies}) => {
  const {id}= useParams()
  const idmovie= Number(id)
  const movie=movies.find((e) =>e.id === idmovie)
  return (
    <div >
      
      <Navbar bg="primary" variant="dark">
        <Container>
        <Link to ='/' style={{textDecoration: 'none'}}>

          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link to ='/' style={{textDecoration: 'none'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#features">Favorite</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
       
          </Container>
      </Navbar>
      <div style={{ boxShadow: '1px 1px 10px 10px rgba(146, 145, 145, 0.418)', margin:'0 40px 0 40px ',paddingBottom:'30px',borderRadius:'30px'}}>
      <h1 style={{margin:'60px 0 0 100px ' ,fontFamily: 'Roboto, sans-serif',paddingTop:'30px'}}>Description</h1>
      <hr style={{margin:'20px 30px 0 30px'}}></hr>
      <div style={{display:'flex', justifyContent:'center',marginTop:'40px'}}>
      <p style={{width:'500px',margin:'auto 30px auto 0'}}>{movie.description}</p>
      <ReactPlayer url={movie.trailer} height="320px"  />
      </div>
  
      </div>
    </div>
  )
}


