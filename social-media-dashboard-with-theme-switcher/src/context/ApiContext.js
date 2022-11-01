import { createContext, useState } from "react";

const initData = {};
const ApiContext = createContext();

function ApiProvider({ children }) {
  const [data, setData] = useState(initData);
  fetch(`${document.location.hef}/data.json`).then((res) =>{
    console.log(res)
    return res.ok ? res.json() : Promise.reject()
  }
    
  )
  .then(json=>setData(json))

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export {ApiContext,ApiProvider}