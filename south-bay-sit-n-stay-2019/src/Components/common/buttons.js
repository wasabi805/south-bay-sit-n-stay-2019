import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
};

export const ButtonTypeOne = props => {

  if(props.buttons){
    return props.buttons.map(attr => {
      return (
          <Link
              key={attr.id}
              to={attr.destinationUrl}
              className={"button-type-one"}
              scroll={el => scrollWithOffset(el, 60)}
          >
            {attr.name}
          </Link>
      );
    });
  }

  return true
};
