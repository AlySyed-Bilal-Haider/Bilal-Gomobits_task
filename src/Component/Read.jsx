import React from "react";
import { Box } from "@mui/material";

//////components ////////
import BasicTable from "./Table/Table";
function Read() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          backgroundColor: "#101010",
          minHeight: "100vh",
        }}
      >
        <BasicTable />
      </Box>
    </>
  );
}

export default Read;
