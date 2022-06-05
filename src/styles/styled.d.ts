import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        darker: string;
        lighter: string;
        default: string;
      };
      secondary: {
        darker: string;
        lighter: string;
        default: string;
      };
      state: {
        error: string;
        warning: string;
        info: string;
        success: string;
      };
      background: {
        400: string;
        300: string;
        200: string;
        100: string;
      };
      text: {
        white: string;
        blue: string;
        green: string;
      };
    };
    fontSizes: {
      48: string;
      40: string;
      32: string;
      24: string;
      22: string;
      20: string;
      18: string;
      16: string;
      14: string;
      13: string;
      12: string;
      11: string;
      10: string;
    };
    fontWeights: {
      800: string;
      700: string;
      500: string;
      400: string;
    };
  }
}
