import React, { useState } from "react";
import Loading from "./loading";
import { Typography, Box, Button, FormControl } from "@mui/material";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { url } from "./URL";
import { useNavigate } from "react-router-dom";

/////////// component //////
import TextInput from "./Inputstyle";
function Add() {
  const navigate = useNavigate();
  const [userstate, setUserstate] = React.useState({
    name: "",
    email: "",
    ceil: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  const changeHandler = (e) => {
    setUserstate({
      ...userstate,
      [e.target.name]: e.target.value,
    });
  };

  //Submit form, after filling the user form;
  const submitHandler = async () => {
    try {
      setLoading(true);
      if (userstate.age <= 18 || userstate.age >= 30) {
        toast.error("Please add age  greater than 18 or less than 30");
        setLoading(false);
        return false;
      }
      if (userstate.ceil.length < 11 || userstate.ceil == "") {
        toast.error("Number is  invailed or empty");
        setLoading(false);
        return false;
      } else if (
        userstate.name !== "" ||
        userstate.email !== "" ||
        userstate.age == ""
      ) {
        const { data } = await axios.post(`${url}/createuser`, userstate);
        if (data?.status == "ok") {
          toast.success(data?.message);
          setUserstate({
            name: "",
            email: "",
            ceil: "",
            age: "",
          });
        }
        data?.status == "error" && toast.error(data?.message);
        data?.status == "ok" && navigate("/");
      } else {
        toast.error("Please fill Signup form !");
        setLoading(false);
        return false;
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Loading loading={loading} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#101010",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: { md: "30%", xs: "77%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 2,
            px: 2,
            mt: { md: 1, xs: 5 },
            borderRadius: "9px",
            boxShadow: "rgb(182 0 211) 0px 0px 23px 2px",
          }}
        >
          <FormControl onSubmit={submitHandler}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                Add user
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  py: 3,
                }}
              >
                <TextInput
                  autoComplete="false"
                  fullWidth
                  value={userstate.name || ""}
                  type="text"
                  name="name"
                  placeholder="Username"
                  onChange={changeHandler}
                  required
                />

                <TextInput
                  fullWidth
                  autocomplete="false"
                  value={userstate.email || ""}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={changeHandler}
                  required
                />

                <TextInput
                  fullWidth
                  type="number"
                  value={userstate.ceil || ""}
                  onChange={changeHandler}
                  placeholder="ceil"
                  name="ceil"
                  autoComplete="off"
                  required
                />
                <TextInput
                  fullWidth
                  type="Number"
                  value={userstate.age || ""}
                  onChange={changeHandler}
                  placeholder="Age"
                  name="age"
                  autoComplete="off"
                  required
                />
                <Button
                  onClick={submitHandler}
                  type="submit"
                  sx={{
                    width: "100%",
                    my: 1,
                    py: 1.5,
                    color: "white",
                    background:
                      "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
                    },
                  }}
                  value="submit"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default Add;
