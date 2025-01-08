import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";

import { Home } from "./pages/home";
import { Demos } from "./pages/demos";
import { Post } from "./pages/post";
import { Features } from "./pages/features";
import { Categories } from "./pages/categories";
import { Shop } from "./pages/shop";
import { BuyNow } from "./pages/buy-now";

import { NotFound } from "./pages/not-found";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/post" element={<Post />} />
          <Route path="/features" element={<Features />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/buy-now" element={<BuyNow />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
