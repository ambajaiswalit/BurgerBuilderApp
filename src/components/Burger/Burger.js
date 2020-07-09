import React from 'react';
 import classes from './Burger.module.css';
 import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {
    //This is for changeing this object into arra
    
    const transforedIngrediants = Object.keys(props.Ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key = {igKey+i} type = {igKey} />;
        });
    }); 
    return (
        <div className={classes.Burger}>
           <BurgerIngredient type="bread-top"/>
           {transforedIngrediants}
           <BurgerIngredient type="bread-bottom"/>
        </div>
    );
 };

 export default burger;