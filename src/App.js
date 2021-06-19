import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { AuthProvider } from "./utils/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
