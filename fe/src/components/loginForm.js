import React from "react";
import { Button, Form, Input, Label } from "reactstrap";

export default function LoginForm({handleChange, handleLogin}) {


    return (
      <Form>
        <Label>Email</Label>
        <Input name="username" type="text" onChange={handleChange} />
        <Label>Password</Label>
        <Input name="password" type="password" label="Password" onChange={handleChange} />
        <Button id="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    );
  }
