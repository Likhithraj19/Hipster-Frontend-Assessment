import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  </QueryClientProvider>
);

export default App;
