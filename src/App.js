import Router from "./routes/Router";
import useLoading from "./hooks/useLoading";
import Spinner from "./components/Spinner";

function App() {
  const { loading } = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  );
}

export default App;
