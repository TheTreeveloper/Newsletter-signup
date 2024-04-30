import { HeroImage } from "./heroImage";
import { TextContent } from "./textContent";
import { FormValidation } from "./form";

export const App = () => {
  return (
    <div className="parent-container">
      <HeroImage />
      <div className="container">
        <TextContent />
        <FormValidation />
      </div>
    </div>
  );
};

export default App;
