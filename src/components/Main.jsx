import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(209, 117, 87, 1)",
    },
    secondary: {
      main: "rgba(20, 20, 19, 1)",
    },
  },
});

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    setInputValue("")
  }

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          Height: "100%",
          pt: 8,
          pr: 8,
          pl: 8,
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          backgroundColor: "rgba(250, 250, 248, 1)",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: 2,
            pt: 4,
            px: 4,
          },
        }}
      >
        <TextField
          name="ingredient"
          size="small"
          color="secondary"
          label="Digite um ingrediente"
          placeholder="Ex. atum"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            width: 500,
            input: {
              fontFamily: "Inter",
              fontSize: "1rem",
              letterSpacing: "-0.01em",
            },
            label: {
              fontFamily: "Inter",
              fontSize: "1rem",
              letterSpacing: "-0.01em",
            },
            "& .MuiOutlinedInput-root": {
              boxShadow:
                "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              backgroundColor: "white",
              borderRadius: "0.375rem",
            },
            [theme.breakpoints.down("sm")]: {
              width: "auto",
            },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          type="submit"
          sx={{
            textTransform: "none",
            ml: 1,
            minWidth: 150,
            boxShadow: "none",
            borderRadius: "0.375rem",
            fontFamily: "Inter",
            fontWeight: 500,
            "& .MuiButton-startIcon": {
              "& svg": {
                fontSize: "0.9375rem",
              },
            },
            "&:hover": {
              boxShadow: "box-shadow: 0px 17px 7px -6px rgba(0,0,0,0.1);",
            },
            "&:active": {
              boxShadow: "box-shadow: 0px 10px 7px 0px rgba(0,0,0,0.1);",
              transform: "scale(0.98)",
            },
            [theme.breakpoints.down("sm")]: {
              ml: 0,
            },
          }}
        >
          Adicionar
        </Button>
      </Box>
      <ul>{ingredientsList}</ul>
    </ThemeProvider>
  );
}
