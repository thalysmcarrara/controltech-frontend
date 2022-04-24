import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Customer from './pages/Customer';
import Report from './pages/Report';
import Signin from './pages/Signin';

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard/report" element={<Report />} />
        <Route path="/dashboard/customer" element={<Customer />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
