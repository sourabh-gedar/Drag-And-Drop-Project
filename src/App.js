import './App.css';
import { useState } from 'react';
import DragAndDrop from './components/DragAndDrop'
import Navbars from './components/navbar/Navbars';
import {columnsFromBackend} from './constants/ColumnsFromBackend'

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [navShow, setNavShow] = useState(false)
  const [navShowRestore, setNavShowRestore] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <Navbars
        setNavShowRestore={setNavShowRestore}
        setNavShow={setNavShow}
        setSearch={setSearch}
        columns={columns}
      />

      <DragAndDrop
        columns={columns}
        setColumns={setColumns}
        navShow={navShow}
        setNavShow={setNavShow}
        setNavShowRestore={setNavShowRestore}
        navShowRestor={navShowRestore}
        search={search}
      />
    </div>
  );
}

export default App;
