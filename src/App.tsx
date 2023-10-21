import { Suspense, lazy } from "react";
import { Footer, Loading } from "./section";
const Header = lazy(() => import("./section/Header"));
const FlightDetails = lazy(() => import("./section/FlightDetails"));
const SearchAndFilter = lazy(() => import("./section/SearchAndFilter"));
const Pagination = lazy(() => import("./section/Pagination"));

const App = () => {
  return (
    <main className="container mx-auto max-sm:px-10">
      <Suspense fallback={<Loading />}>
        <header>
          <Header />
        </header>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div>
          <SearchAndFilter />
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div>
          <FlightDetails />
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div>
          <Pagination />
        </div>
      </Suspense>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
