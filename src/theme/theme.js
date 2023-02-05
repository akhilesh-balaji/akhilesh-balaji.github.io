import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif",
    },
    colors: {
        blue: {
            200: "#2b81ef",
            300: "#37A5DE",
            400: "#236AF9",
        },
        brand: {
            800: "#030320",
            700: "#040412",
            600: "#262240",
            500: "#e3e5f3",
            400: "#181825"
        },
        rainbow: {
            500: "#f17706",
            400: "#e24803",
            300: "#c64430",
            200: "#833998",
            100: "#0083d9",
        }
    },
    styles: {
        global: {
            body: {
                bg: "brand.700",
                fg: "brand.500",
            },
        },
    },
    components: {
        Badge: {
            baseStyle: {
                borderRadius: 'md',
                textTransform: "capitalize",
                px: "5px"
            }
        }
    },
}, { config });

export default theme;