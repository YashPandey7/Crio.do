import React from 'react';
// import Increment from './Increment';
// import Form from './Form';
import "./index.css";
// import Home from './TakeHome3/Home';
import Snackbar from './Snackbar';
import { SnackbarProvider } from 'notistack';
import Hooks from './Hooks';
// import Home from './TakeHome2/Home';
// import Count from './Count';
// import Home from './TakeHome/Home';

const App = () => {
    return (
        <>
            {/* <Card name = "Yash" Content="Crio.do"/>
            <Card name = "Ansh" Content="Crio.do"/> */}
            {/* <Increment/> */}
            {/* <Form/> */}
            {/* <Home/> */}
            {/* <Count/> */}
            {/* <Home /> */}
            {/* <Home /> */}
            {/* <SnackbarProvider>
                <Snackbar />
            </SnackbarProvider> */}
            <Hooks/>
        </>
    );
}

export default App;