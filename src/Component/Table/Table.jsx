import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Loading from "../loading";
import styled from "styled-components";
import "./Table.css";
import axios from "axios";
import Notfound from "../Notfound/Notfound";
import { url } from "../URL.js";
import { rowStyle } from "./Row";
import "./Search.css";
const StyledTableRow = styled(TableRow)(() => ({
  [`&.${StyledTableRow.body}`]: {
    padding: "25px",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "16px",
    color: "#C1C6C2",
  },
}));
const head = {
  color: "white",
};

export default function BasicTable() {
  const [searched, setSearched] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [userState, setUserstate] = useState([]);
  const [allDetails, setAlldetails] = useState([]);
  const [check, setCheckstate] = useState(true);
  //////////////////seach handler/////////////
  const changeHandle = (e) => {
    if (check) {
      console.log("set ALl details", check);
      setUserstate(allDetails);
      setCheckstate(false);
    }
    setSearched(e.target.value);
  };
  const requestSearch = (e) => {
    e.preventDefault();
    let filteredRows;
    filteredRows = userState?.filter((row) => {
      return (
        row?.name?.toLowerCase()?.includes(searched?.toLowerCase()?.trim()) ||
        row?.email?.toLowerCase()?.includes(searched?.toLowerCase()?.trim())
      );
    });
    setUserstate(filteredRows);
    setCheckstate(true);
    setSearched("");
  };
  /////////////////End search handler/////////////////
  useEffect(() => {
    const fetchuser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${url}/getuser`);
        setUserstate(data);
        setAlldetails(data);
        setLoading(false);
      } catch (error) {
        console.log("user details issues", error);
        setLoading(false);
      }
    };
    fetchuser();
  }, []);

  return (
    <>
      <Loading loading={loading} />
      {userState?.length > 0 ? (
        <>
          <TableContainer
            component={Paper}
            sx={{
              position: "relative",
              mt: 3,
              width: { md: "55%", xs: "90%" },
              borderRadius: "9px",
              boxShadow: "rgb(182 0 211) 0px 0px 23px 2px",
              backgroundColor: "#101010",
            }}
          >
            <form className="search-container" onSubmit={requestSearch}>
              <input
                value={searched}
                type="text"
                placeholder="Search.."
                name="search"
                onChange={changeHandle}
              />
              <button type="submit">Submit</button>
            </form>
            <Table
              sx={{ minWidth: 650, color: "red", py: 2 }}
              aria-label="simple table"
            >
              <TableHead>
                <StyledTableRow sx={rowStyle}>
                  <TableCell component="th" style={head}>
                    #
                  </TableCell>
                  <TableCell component="th" style={head}>
                    Name
                  </TableCell>
                  <TableCell component="th" style={head}>
                    Age
                  </TableCell>
                  <TableCell component="th" style={head}>
                    Ceil
                  </TableCell>
                  <TableCell component="th" style={head}>
                    Email
                  </TableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {userState?.map(({ age, ceil, email, name }, index) => (
                  <StyledTableRow key={index} sx={rowStyle}>
                    <TableCell component="th" scope="row">
                      #
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{age}</TableCell>
                    <TableCell>{ceil}</TableCell>
                    <TableCell>{email}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
            sx={{
              m: 2,
              backgroundColor: "none",
              color: "white",
              "&:hover": {
                backgroundColor: "none",
              },
            }}
          >
            <RefreshIcon />
          </Button>
          <Notfound />
        </>
      )}
    </>
  );
}
