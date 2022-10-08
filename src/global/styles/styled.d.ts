import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme; //Usando o typeof ele acaba pegando o estrutural do objeto theme, e transforma em tipo

  export interface DefaultTheme extends ThemeType {}
}
