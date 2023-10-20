import FlightDetails from "./section/FlightDetails";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Pagination from "./section/Pagination";
import SearchAndFilter from "./section/SearchAndFilter";

const App = () => {
  return (
    <main className="container mx-auto max-sm:px-10">
      <header>
        <Header />
      </header>
      <div>
        <SearchAndFilter />
      </div>
      <div>
        <FlightDetails />
      </div>
      <div>
        <Pagination />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
