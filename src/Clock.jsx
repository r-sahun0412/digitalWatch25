import React, { useState, useEffect } from "react"; 
import { Grid2, Typography} from "@mui/material";

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

  // Formats the date as DD:MM:YYYY
  const showDate =
    getCurrentDate.getDate().toString().padStart(2, "0") + // Day with leading zero
    "/" +
    (getCurrentDate.getMonth() + 1).toString().padStart(2, "0") + // Month with leading zero
    "/" +
    getCurrentDate.getFullYear(); // Full year

  // Formats the time as HH:MM:SS
  const showTime =
    getCurrentDate.getHours().toString().padStart(2, "0") +
    ":" +
    getCurrentDate.getMinutes().toString().padStart(2, "0") +
    ":" +
    getCurrentDate.getSeconds().toString().padStart(2, "0");

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh", 
        backgroundColor: "#000", 
        padding: "20px",
      }}
    >
      <Grid2
        item
        xs={12} sm={10} md={8} lg={6} // Responsive breakpoints
        sx={{
          backgroundColor: "#222", 
          borderRadius: "20px",
          padding: "30px",
          border: "5px solid #00FFFF", 
          boxShadow: "0px 0px 40px 10px #00FFFF", 
          textAlign: "center", // Center content inside
          maxWidth: "90%", // Prevent overflowing content
          overflow: "hidden", // Ensure no overflow
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
            fontSize: { xs: "2rem", sm: "5rem", md: "6rem" }, // Responsive text size
            maxWidth: "100%", // Ensure the time fits inside the box
            whiteSpace: "nowrap", // Prevent wrapping on smaller screens
          }}
        >
          {showTime}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default DigitalClock;
