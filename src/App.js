import "./styles.css";

const luckyNum = "7";
const MyName = " Muhammad Sahil";
const CurrentYear = new Date().getFullYear();
export default function App() {
  return (
    <div className="App">
      <p>Created by {MyName}</p>
      <p>Copyright {CurrentYear}</p>
    </div>
  );
}
