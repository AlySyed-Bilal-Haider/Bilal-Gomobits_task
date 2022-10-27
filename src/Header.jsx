import React from "react";
import { Box, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
const StyledButtton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        borderRadius: "26px",
        color: "#fff",
        textTransform: "capitalize",
        height: "48px",
        width: "150px",
        fontSize: "16px",
        fontFamily: "Roboto",
        m: 1,
        "&:hover": {
          background:
            "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        },
      }}
    >
      {children}
    </Button>
  );
};
function Header() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        p: 2,
      }}
    >
      <StyledButtton
        onClick={() => {
          navigate("/Add");
        }}
      >
        Add user
      </StyledButtton>
      <StyledButtton
        onClick={() => {
          navigate("/");
        }}
      >
        Read
      </StyledButtton>
    </Box>
  );
}

export default Header;
