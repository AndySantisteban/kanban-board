import "react-responsive-modal/styles.css";
import { CreateForm } from "./components/form/create.form";
import { List } from "./components/list";
import { status } from "./models/task.model";
import { enumToArray } from "./utils/enumsToArray.utilities";

function App() {
  const sections = enumToArray(status);

  return (
    <>
      <h1 className="title">Board Kanban</h1>
      <CreateForm />
      <div className="layout">
        {sections?.map((i: any) => {
          return <List status={i.key} />;
        }) ?? []}
      </div>
    </>
  );
}

export default App;
