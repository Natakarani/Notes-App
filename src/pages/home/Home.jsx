import React from 'react'
import './style.css'
function Home() {
  return (
      <div>
      <div className='homeBanner d-flex align-items-center gap-4 p-4'>
        <div>
          <h1 className='display-3'>A passionate web company</h1>
            <p className='fs-5 mt-3 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
           <button className='btn btn-outline-light px-4 text-white'>Get Started</button>
        </div>
        <img src="https://img.freepik.com/free-vector/notebook-concept-illustration_114360-387.jpg?uid=R137116910&ga=GA1.1.132014876.1707307712&semt=ais_hybrid"></img>
        <div>

        </div>
      </div>
      
      <div className='d-flex gap-4 mt-5 px-5 align-items-center'>
        <div>
        <h3 style={{lineHeight:1.4}} className='mb-3'>
        Lorem ipsum dolor sit amet, a eaque vel eius a.a eaque vel eius a.
          </h3>
          <p className='lead' style={{letterSpacing:'2px'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla-mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in

           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, aspernatur.
          </p>
        </div>
        <img src="https://themewagon.github.io/notes-html-template/images/about/1.jpg"></img>

      </div>

      <footer className='d-flex justify-content-around bg-dark text-white p-3 py-5'>
        <div>
          <h1>NOTES</h1>
          <div className='d-flex gap-3 fs-4'>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
          </div>

        </div>
        <div>
          <h4>Home</h4>
          <p>Contacts</p>
          <p>Details</p>
          <p>About Us</p>
        </div>
        <div>
          <div className='d-flex gap-3'>
            <i class="bi bi-telephone"></i>
          <p>+91- 7890909090</p>
        </div>
          <div className='d-flex gap-3'>
            <i class="bi bi-envelope"></i>
            <p>email@gmail.com</p>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home