//This is a functional component where i also wont manag any state with hook 
//and i will name it aux ,here i get props as input and i return props children only,
//no wrapping element,not have JSX in this file thats why no need of import React from raect. 


const aux = (props) => props.children;

export default aux;