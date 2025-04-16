import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
    };
    fontFamily: string;
    text: {
      title: {
        titleL: {
            fontSize: string;
            fontWeight: string | number;
        };
        titleM: {
            fontSize: string;
            fontWeight: string | number;
        };
      };
      body: {
        bodyM: {
            fontSize: string;
            fontWeight: string | number;
        };
        bodyS: {
            fontSize: string;
            fontWeight: string | number;
        };
      };
      label: {
        labelM: {
            fontSize: string;
            fontWeight: string | number;
        };
        labelS: {
            fontSize: string;
            fontWeight: string | number;
        };
      };
    }
  }
}
