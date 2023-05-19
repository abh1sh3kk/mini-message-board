import React, { useEffect, useState } from "react";

function ApiTest() {
    const [data, setData] = useState({});
    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3000/test/");
            const obj = await res.json();

            setData(obj);
            console.log(obj);
        })();
    }, []);
    return (
        <>
            <header>Header</header>
            <main>{`${data.name} says ${data.message}`}</main>
            <footer>Footer</footer>
        </>
    );
}

export default ApiTest;
