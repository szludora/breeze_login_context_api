import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adat = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };
    try {
      await axios.post("/register", adat);
    } catch (error) {
      console.log(error);
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
        <Form.Text className="text-muted">A formátum nem megfelelő</Form.Text>
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
        <Form.Text className="text-muted">A formátum nem megfelelő</Form.Text>
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
        <Form.Text className="text-muted">A formátum nem megfelelő</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Regisztráció
      </Button>
    </Form>
  );
}
