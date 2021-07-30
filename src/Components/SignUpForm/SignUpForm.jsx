import React, { useState } from "react";
import {
  Button,
  Paper,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { theme } from "../../globalStyles";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../Contexts/AuthContext";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirm !== password) {
      return setError("Passwords do no match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/");
    } catch (err) {
      setError(err.message ? err.message : "Failed to create a user!");
    }

    setLoading(false);
  }

  return (
    <Paper style={{ padding: theme.spacing(2) }}>
      <Typography
        variant="h4"
        color="primary"
        align="center"
        style={{ marginBottom: theme.spacing(2) }}
      >
        Sign Up
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Form action="submit" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="email"
          variant="outlined"
          label="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          type="password"
          variant="outlined"
          label="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={Boolean(error)}
        />
        <TextField
          fullWidth
          type="password"
          variant="outlined"
          label="Confirm Password"
          className="input"
          required
          error={Boolean(error)}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <div className="divider" />
        <Button
          disableElevation
          variant="contained"
          fullWidth
          color="primary"
          type="submit"
          size="large"
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Sign Up"}
        </Button>
        <div className="divider" />
        <Link to="/login">
          <Button variant="text" color="primary">
            Login
          </Button>
        </Link>
      </Form>
    </Paper>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .divider {
    margin-top: 10px;
  }
`;
