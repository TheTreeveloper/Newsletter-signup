import { HeroImage } from "./heroImage";
import { TextContent } from "./textContent";

export const App = () => {
  return (
    <div className="parent-container">
      <HeroImage />
      <div className="container">
        <TextContent />
      </div>
    </div>
  );
};

export default App;
