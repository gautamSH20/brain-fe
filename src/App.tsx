import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon />}
        vairant="secondary"
        size="md"
        text="hello asdfasdf"
        onclick={() => {}}
      ></Button>
      <Button
        endIcon={<ShareIcon />}
        vairant="primary"
        size="md"
        text="next part is here"
        onclick={() => {}}
      ></Button>
    </>
  );
}

export default App;
