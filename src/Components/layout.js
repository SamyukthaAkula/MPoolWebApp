import React from 'react';

const Layout = (props)=>{
    return (
        <>
          <div class="main">
          <div class="container">
              {props.children}
          </div>
          </div>
       </> 
    )
}

export default Layout;




