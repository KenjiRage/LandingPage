import React from "react";

const Jumbotron = () => {
   return ( 
      <div className="jumbotron ">
      <div className="container p-4 alert alert-secondary">
           <h1 className="display-4 text-start fw-normal">A Warm Welcome!</h1>
           <p className="lead text-start fw-normal " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus at ligula quis hendrerit. Vestibulum elementum faucibus tortor ut euismod.</p>
           <button type="button" class="btn btn-primary d-flex align-items-start">Call to action!</button> 
      </div>
      </div>
     );

    };

export default Jumbotron;