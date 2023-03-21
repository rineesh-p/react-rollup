import React from 'react';
import "./app.css";

const DynBtn = React.lazy (()=> import ("./components/DynamicButton/index.js"));

function App (){
    return (
        <section>
            Welcome to React with Rollup!
            <React.Suspense fallback={<div className='loader'>Loading...</div>}>
                <DynBtn >Click me !</DynBtn>
            </React.Suspense>
        </section>
    )
}

export default App;