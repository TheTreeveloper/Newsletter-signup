import { HeroImage } from "./heroImage";
import { TextContent } from "./textContent";
import { Search } from "./form";

export const App = () => {
  return (
    <div className="parent-container">
      <HeroImage />
      <div className="container">
        <TextContent />
        <Search />
      </div>
    </div>
  );
};

export default App;
