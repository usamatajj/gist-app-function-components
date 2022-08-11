import { withAuth } from "hoc/withAuth";
import { withRouter } from "hoc/withRouter";
import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  GridCenter,
  GridTitle,
  ShadowGridItem,
} from "shared-styles/Grid.styles";
import { setLoggedInState } from "redux-state/gists/actions";
import {
  SubmitButton,
  TextField,
  TextFieldContainer,
  UserNameField,
} from "./Login.styles";
import { EnterOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import Button from "components/common/Button/Button";

const Login = ({ router }) => {
  // Redux Hooks
  const dispatch = useDispatch();

  // Functions
  const handleLogin = (e) => {
    localStorage.setItem("gist_app", JSON.stringify({ logged_in: true }));
    dispatch(setLoggedInState(true));
    router.navigate("/");
    e.preventDefault();
  };

  // Rendering
  return (
    <GridCenter>
      <form>
        <ShadowGridItem widthPercent="400">
          <GridTitle remSize="1.5">Login</GridTitle>
          <TextFieldContainer>
            <label htmlFor="username">Username</label>
            <TextField
              prefix={<UserOutlined />}
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <label htmlFor="password">Password</label>
            <TextField
              prefix={<KeyOutlined />}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <Button onClick={handleLogin} block icon={<EnterOutlined />}>
              Login
            </Button>
          </TextFieldContainer>
        </ShadowGridItem>
      </form>
    </GridCenter>
  );
};

export default withRouter(withAuth(Login));
