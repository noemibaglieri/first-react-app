import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import ImageComponent from "./components/imageComponent";

function App() {
  return (
    <>
      <ButtonComponent buttonText="Sono un bottone di prova!" />
      <ImageComponent imageSrc="https://images.pexels.com/photos/22668200/pexels-photo-22668200/free-photo-of-uomo-shorts-pantaloncini-relax.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </>
  );
}

export default App;
