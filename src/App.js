import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      {routes.map((routeObj) => {
        return (
          <Routes key={routeObj.path}>
            <Route path={routeObj.path} element={routeObj.render()} />;
          </Routes>
        );
      })}
    </BrowserRouter>
  );
};

export default App;
