// Importing necessary tools from React
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const DigitalClock = () => {
  // Step 1: Create a state variable to hold the current date and time
  const [getCurrentDate, setCurrentDate] = useState(new Date());

  // Step 2: Set up a timer to update the date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date()); // Update with the current date and time
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when the component is unmounted
  }, []);

  // Step 3: Format the date as DD:MM:YYYY
  const showDate =
    getCurrentDate.getDate().toString().padStart(2, "0") + // Day with leading zero
    ":" +
    (getCurrentDate.getMonth() + 1).toString().padStart(2, "0") + // Month with leading zero
    ":" +
    getCurrentDate.getFullYear(); // Full year

  // Step 4: Format the time as HH:MM:SS
  const showTime =
    getCurrentDate.getHours().toString().padStart(2, "0") +
    ":" +
    getCurrentDate.getMinutes().toString().padStart(2, "0") +
    ":" +
    getCurrentDate.getSeconds().toString().padStart(2, "0");

  // Step 5: Render the clock
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000", // Black background for alarm clock look
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Outer frame to simulate alarm clock casing */}
      <Box
        sx={{
          backgroundColor: "#222", // Dark grey for the clock body
          borderRadius: "20px", // Rounded corners for the clock body
          padding: "30px",
          border: "5px solid #00FFFF", // Neon cyan border
          boxShadow: "0px 0px 40px 10px #00FFFF", // Glow effect for the outer casing
        }}
      >
        
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Orbitron', sans-serif", 
            color: "#00FFFF", 
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          Digital Clock
        </Typography>

       
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Orbitron', sans-serif", 
            color: "#00FFFF", 
            letterSpacing: "3px",
            marginBottom: "10px",
          }}
        >
          {showDate}
        </Typography>

        
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Orbitron', sans-serif", 
            fontWeight: "bold",
            color: "#00FFFF", 
            letterSpacing: "5px",
            textShadow: "0 0 2px #00FFFF, 0 0 2px #00FFFF, 0 0 3px #00FFFF", 
          }}
        >
          {showTime}
        </Typography>
      </Box>
    </Box>
  );
};

// Step 6: Make this component available for use in other parts of the app
export default DigitalClock;
