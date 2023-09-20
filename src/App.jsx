import NotesList from "./Components/NoteList";
import CreateNote from "./Components/CreateNote";
import Sidebar from "./Components/Sidebar";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Sidebar />
        <CreateNote />
        <NotesList />
      </div>
    </Provider>
  );
};

export default App;
