import React from "react";
import { Box, Typography } from "@mui/material";
import gomobit from "../../Images/logo.svg";
function Notfound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 3,
        mt: 2,
      }}
    >
      <Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <img
            src={gomobit}
            style={{ width: "330px", height: "150px" }}
            alt="gomobit"
          />
        </Box>{" "}
        <br />
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          Up coming soon !
        </Typography>
      </Box>
    </Box>
  );
}

export default Notfound;
