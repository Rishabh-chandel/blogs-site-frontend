import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Footer() {
    const {pages , handelpage , totalpage} = useContext(AppContext);
    console.log(totalpage);
    return(
        <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
            <div className="flex justify-between w-11/12 max-w-[670px] mt-1">
                <div className="flex gap-x-2">
                    {
                        (pages > 1) && (<button className=" rounded-md border px-4 py-1" onClick={ () => handelpage(pages-1)}>Previous</button>)
                    }
                    {
                        (pages < totalpage) && (<button className=" rounded-md border px-4 py-1" onClick={ () => handelpage(pages+1)}>Next</button>)
                    }
                </div>
                <p className=" text-lg">
                    Page {pages} of {totalpage}
                </p>
            </div>
        </div>
    );
}

export default Footer;