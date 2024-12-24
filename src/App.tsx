import { BrowserRouter, Route, Routes } from "react-router";
import { SelectView } from "./views/SelectView";
import { BrandedLayout } from "./ui/layouts/BrandedLayout";
import { NotFound } from "./ui/blocks/NotFound";
import { RankView } from "./views/RankView";

function App() {
  return (
    <BrandedLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SelectView />} />
            <Route path="/rank" element={<RankView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BrandedLayout>
  );
}

export default App;
