import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste react🚀"); //this line creates an object 

console.log(heading);
// to create any tag we have to use this syntax but this is not a good way so react develpers create JSX(Js syntax)
// JSX is not a part of react, JSX is a convention in which we can merge (JS and html)
// JSX is not HTML, JSX has html like syntax

const Tittle = () => (
    <h1 className="head" tabIndex="5"> 
        This is Namaste react from JSX🚀
    </h1>
);

// functional component
// Component composition
 const HeadingComponent = () => (
    
    <div id="container">
        {Tittle()}
        <Tittle></Tittle> 
        <Tittle/>
        {/* the above all three things are equal */ }
        
        <h1 className="Heading"> Functional Component from react🚀</h1>
    </div> 
 );

const root = ReactDOM.createRoot(document.getElementById("root")); // this line takes the object and converts it to HTML and push to browser

root.render(<HeadingComponent/>);

