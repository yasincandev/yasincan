import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    logoColor: string;
    helloColor: string;
    modeColor: string;
    hoverBg: string;
    hoverText: string;
    aboutMeBg: string;
    aboutMeColor: string;
  }
}
