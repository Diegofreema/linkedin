import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Widget from "./components/Widget";


function App() {
  return (
    <div className="bg-[#f3f2ef] flex flex-col  ">
      <Header />
      <div className="app-body flex">
        <SideBar />
        <Main />
        <Widget />
      </div>
    </div>
  );
}

export default App;
