import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./components/Dashboard";
import Loader from "./components/Loader";

const initData = {};
function App() {
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch(`${document.location.origin}/data.json`).then(
        (res) => {
          return res.ok ? res.json() : Promise.reject();
        }
      );
      console.log(json);
      if (json) {
        //other conditions
        setData(json);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ThemeProvider>
        {!loading ? <Dashboard data={data} /> : <Loader />}
      </ThemeProvider>
    </>
  );
}

export default App;
