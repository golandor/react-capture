import React from "react";

//* import Pages
import AboutUs from "./pages/AboutUs";

//*import style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
