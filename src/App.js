import React from "react";
import { Routes, Route } from "react-router-dom";
import NuConsortiumHome from "./pages/nuConsortium/NuConsortiumHome";
import Layout from "./components/layout/Layout";
import NuPayment from "./pages/nuPayment/NuPayment";
import NuBlock from "./pages/nuBlock/NuBlock";
import Nu from "./pages/nu/Nu";

const App = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<NuConsortiumHome />} />
        <Route path="/nupayments" element={<NuPayment />} />
        <Route path="/nublock" element={<NuBlock />} />
        <Route path="/nu" element={<Nu />} />
        {/* <Route path="/whitepaper" element={<Whitepaper /> } /> */}
      </Route>
    </Routes>
  );
};

export default App;
