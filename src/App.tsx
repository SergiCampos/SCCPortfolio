import "./index.css";
import NavBar from "./NavBar/NavBar";
import PageContainer from "./Pages/PageContainer";

function App() {
  return (
    <>
      <PageContainer>
        <div className="h-3/12 border border-emerald-400">Hello World</div>
      </PageContainer>
      <PageContainer> </PageContainer>
      <NavBar />
    </>
  );
}

export default App;
