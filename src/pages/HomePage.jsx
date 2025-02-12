import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const text = "Welcome to My Contacts";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowDescription(true), 500);
    }
  }, [index]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",

        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {displayedText}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            maxWidth: "600px",
            mt: 2,
            opacity: showDescription ? 1 : 0,
            transition: "opacity 1.5s ease-in",
          }}
        >
          A simple and secure way to store your contacts. Sign in to manage your
          personal contact list with ease.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
