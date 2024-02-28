import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      console.log(response.data);
      console.log(response);
      token = response.data;
      console.log(token);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await csrf();
    const adat = {
      email: email,
      password: password,
      _token: token,
    };
    try {
      await axios.post("/login", adat);
      console.log("siker");
      navigate("/");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <Form className="w-75 bg-light p-5 m-auto mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Név</Form.Label>
        <Form.Control
          type="text"
          placeholder="Példa Éva"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          {errors.name && <span className="text-danger">{errors.name[0]}</span>}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="eva@pelda.hu"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          {errors.email && (
            <span className="text-danger">{errors.email[0]}</span>
          )}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Jelszó</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ev4Vagy0k@1$23"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          {errors.password && (
            <span className="text-danger">{errors.password[0]}</span>
          )}
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Regisztráció
      </Button>
    </Form>
  );
}
