import React from "react";

const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-dark ">
         <div class="container">
           <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <       span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <       ul class="navbar-nav ">
               <li class="nav-item">
                 <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link active text-white" aria-current="page" href="#">About</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link active text-white" aria-current="page" href="#">Services</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link active text-white" aria-current="page" href="#">Contact</a>
               </li>
             </ul>
           </div>       
         </div>
</nav>
    );

};


export default NavBar;