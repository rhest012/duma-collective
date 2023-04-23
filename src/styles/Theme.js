import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    colors: {
      brand: {
        900: "#1E174B"
      }
    },
    fonts : {
        body: "'Fira Sans', sans-serif",
        heading: "'Fira Sans', sans-serif"
    },
    components: {
      Heading: {
        variants: {
          h1: {
            fontWeight: 600,
            fontSize: "3.81rem",
            letterSpacing: "1.5px",
            
          },
          h2: {
            fontWeight: 800,
            fontSize: "3.05rem",
            letterSpacing: "1.5px",
            
          },
          h3: {
            fontWeight: 600,
            fontSize: "2.44rem",
            letterSpacing: "1.5px",
            
          },
          h4: {
            fontWeight: 600,
            fontSize: "1.95rem",
            letterSpacing: "1.5px",
            marginBottom: "1rem"
          },
          h5: {
            fontWeight: 600,
            fontSize: "1.56rem",
            letterSpacing: "1.5px",
            
          },
          h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
          },
        },
      },
  }
})

export default theme