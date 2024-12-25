import { BrowserRouter, Route, Routes } from "react-router";
import { SelectView } from "./views/SelectView";
import { BrandedLayout } from "./ui/layouts/BrandedLayout";
import { ErrorView } from "./views/ErrorView";
import { RankView } from "./views/RankView";
import { ThemeProvider } from "./providers/ThemeProvider";
import { ResultsView } from "./views/ResultsView";
import { Toaster } from "./ui/Toast";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrandedLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<SelectView />} />
              <Route path="/rank" element={<RankView />} />
              <Route path="/results" element={<ResultsView />} />
              <Route path="*" element={<ErrorView />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </BrandedLayout>
    </ThemeProvider>
  );
}

export default App;
