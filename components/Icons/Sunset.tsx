import * as React from "react";
import { SVGProps } from "react";

export const Sunset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='100'
    height='100'
    x='0'
    y='0'
    viewBox='0 0 128 128'
    {...props}
    fill='currentColor'
  >
    <path d='M105 43c-1.2-1.2-3.1-1.2-4.2 0L88.6 55.1c-5.9-5.1-13.4-8.3-21.6-9V29c0-1.7-1.3-3-3-3s-3 1.3-3 3v17.1c-8.2.6-15.7 3.9-21.6 9L27.2 43c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l12.1 12.1c-5.1 5.9-8.3 13.4-9 21.6H9c-1.7 0-3 1.3-3 3s1.3 3 3 3h110c1.7 0 3-1.3 3-3s-1.3-3-3-3h-17.1c-.6-8.2-3.9-15.7-9-21.6L105 47.2c1.2-1.1 1.2-3 0-4.2zm-9.1 38H32.1C33.7 64.8 47.4 52 64 52s30.3 12.8 31.9 29z'></path>
  </svg>
);
