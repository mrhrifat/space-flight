import { Suspense, lazy } from "react";
import { Loading } from "./section";
const Footer = lazy(() => import("./section/Footer"));
const Header = lazy(() => import("./section/Header"));
const FlightDetails = lazy(() => import("./section/FlightDetails"));
const SearchAndFilter = lazy(() => import("./section/SearchAndFilter"));
const Pagination = lazy(() => import("./section/Pagination"));

const App = () => {
  return (
    <main className="container mx-auto max-sm:px-10">
      <header>
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
      </header>
      <div>
        <Suspense fallback={<Loading />}>
          <SearchAndFilter />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <FlightDetails />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <Pagination />
        </Suspense>
      </div>
      <footer>
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </footer>
    </main>
  );
};

export default App;
