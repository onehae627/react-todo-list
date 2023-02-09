import { AppBar,Toolbar } from "@mui/material";

function App() {
  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <div className="font-bold">NOTEPAD</div>
          <div className="flex-1"></div>
        </Toolbar>
       </AppBar>
       <Toolbar />
    </>
  );
}

export default App;
