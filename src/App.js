import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./componets/Nav";
import routes from "./routes";

function App() {
  return (
    <>
      <Nav />
      <div className="container mt-3">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}
export default App;
