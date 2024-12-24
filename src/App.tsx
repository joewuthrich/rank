import { BrowserRouter, Route, Routes } from "react-router";
import { SelectView } from "./views/SelectView";
import { BrandedLayout } from "./ui/layouts/BrandedLayout";
import { ErrorView } from "./views/ErrorView";
import { RankView } from "./views/RankView";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrandedLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<SelectView />} />
              <Route path="/rank" element={<RankView />} />
              <Route path="*" element={<ErrorView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BrandedLayout>
    </ThemeProvider>
  );
}

export default App;
