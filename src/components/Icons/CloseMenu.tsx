import * as React from "react";
import { SVGProps } from "react";

export const CloseMenu: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      x='0'
      y='0'
      viewBox='0 0 50 50'
      {...props}
    >
      <path d='M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zm0 2h32c1.668 0 3 1.332 3 3v32c0 1.668-1.332 3-3 3H9c-1.668 0-3-1.332-3-3V9c0-1.668 1.332-3 3-3zm7.707 9.293l-1.414 1.414L23.586 25l-8.293 8.293 1.414 1.414L25 26.414l8.293 8.293 1.414-1.414L26.414 25l8.293-8.293-1.414-1.414L25 23.586l-8.293-8.293z'></path>
    </svg>
  );
};
