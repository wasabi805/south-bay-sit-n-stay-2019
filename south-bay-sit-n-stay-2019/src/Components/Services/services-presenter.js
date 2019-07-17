import React from 'react';

import HeroPresenter from "../../Components/Hero/hero-presenter"


const ServicesPresenter = (props)=>{
    return(
        <div id={'services'}>
           <HeroPresenter
               heroContext={props.heroContext}
           />
        </div>
    )
};

export default ServicesPresenter