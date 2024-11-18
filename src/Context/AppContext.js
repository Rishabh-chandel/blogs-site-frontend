import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const[loading,setloading] = useState(false);
    const[post,setpost] = useState([]);
    const[pages,setpages] = useState(1);
    const[totalpage,settotalpage] = useState(null);

    async function fetchdata(pages = 1) {
        setloading(true);
        const url = `${baseUrl}?page=${pages}`;
        try {
            const output = await fetch(url);
            const data = await output.json();
            console.log(data);
            setpost(data.posts);
            setpages(data.page);
            settotalpage(data.totalPages);
        }
        catch(err) {
            console.log("error");
            setpost([]);
            setpages(1);
            settotalpage(null);
        }
        setloading(false);
    }

    function handelpage(pages) {
        setpages(pages);
        fetchdata(pages);
    }

    const data = {loading,setloading,post,setpages,setpost,settotalpage,totalpage,fetchdata,handelpage,pages};

    return (<AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>);
}
