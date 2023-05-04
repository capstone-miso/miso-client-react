import { extendTheme } from "@chakra-ui/react";
import { Do_Hyeon } from "next/font/google";


type Alpha =
  | 90
  | 85
  | 80
  | 70
  | 60
  | 40
  | 30
  | 22
  | 20
  | 15
  | 12
  | 10
  | 8
  | 5
  | 3;

function alphaToHex(alpha: Alpha) {
  const intValue = Math.round((alpha / 100) * 255);
  const hexValue = intValue.toString(16);
  return hexValue.padStart(2, "0").toUpperCase();
}

export function getAlphaHex(HEX: string, alpha: Alpha) {
  return `${HEX}${alphaToHex(alpha)}`;
}

export const Colors = {
    orange: {
      "300": "#FF9C28",
    },
    red: {
      "300": "#FF5C5C",
      "400": "#E94E58",
      "500": "#AC3E46",
    },
    gray: {
      "50": "#FCFCFC",
      "100": "#F7F7F8",
      "200": "#EFEFF0",
      "500": "#A7A7AA",
      "700": "#464748",
      "800": "#313234",
      "850": "#2A2B2D",
      "900": "#242428",
    },
  };

const PRETENDARD_PREFERED_FONT =
  "'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,'Helvetica Neue','Segoe UI','Apple SD Gothic Neo','Noto Sans KR','Malgun Gothic','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif";
const dohyeon = Do_Hyeon({ weight: "400", subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    heading: PRETENDARD_PREFERED_FONT,
    body: PRETENDARD_PREFERED_FONT,
    logo: dohyeon,
  },
  colors: Colors,
  components: {
    Heading: {
      variants: {
        "title.20": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "bold",
        },
        "subtitle.18": {
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
    },
    Text: {
      variants: {
        "title.20": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "bold",
        },
      },
    },
    Button: {
      variants: {
        "button.15": {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;