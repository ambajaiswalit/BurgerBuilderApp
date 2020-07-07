import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';


const layout = (Props) => ( //this props allows us to simply use this layout component as a wrapper around the core content component we want to render on the screen.
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {Props.children}
    </main>
    </Aux>
);

export default layout;