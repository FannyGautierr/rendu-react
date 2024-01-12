import React from "react";
import Header from "../Header";

export default function Layout({children}){
    return(
        <>
        <div>
            <Header/>
        </div>
        <main className="relative mt-20">
            {children}
        </main>
        </>
    )
}
