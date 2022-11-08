import "./App.css";
import Application from "./components/Application/Application";
import Body from "./UI/Body/Body";
import Container from "./UI/Container/Container";

function App() {
  return (
    <Body className="body">
      <Container className="container">
        <Application />
      </Container>
    </Body>
  );
}

export default App;
