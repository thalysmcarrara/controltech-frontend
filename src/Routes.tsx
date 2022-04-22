import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Signin from './pages/Signin';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Signin />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
