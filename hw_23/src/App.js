import React from 'react';
import {FunctionCounter} from "./components/counter/FunctionCounter";
import {Todo} from "./components/pages/todofunction";
import {Smiles} from "./components/pages/smilefunction";
import {Route, Routes} from "react-router";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";
import SmileDetails from "./components/pages/smilefunction/components/SmileDetails";
import Sidebar from "./components/sidebar";

import './App.css';
import CounterRedux from "./components/pages/counter-redux";
import Learning from "./components/pages/learning";

export default function App() {
    return (
        <div className={"main-layout"}>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="smiles">
                        <Route index element={<Smiles/>}></Route>
                        <Route path=":id" element={<SmileDetails/>}/>
                    </Route>
                    <Route path="todo" element={<Todo/>}/>
                    <Route path="counter-redux" element={<CounterRedux/>}/>
                    <Route path="counter" element={<FunctionCounter/>}/>
                    <Route path="learning" element={<Learning/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </div>
        // <div>
        //     {/*<FirstComponent/>*/}
        //     {/*<FunctionCounter />*/}
        //     {/*<LifeCycleDemo/>*/}
        //     {/*<TestComponent name={[1, 2, 3, 4, 5]}/>*/}
        //     {/*<Todo/>*/}
        //     {/*<SmilesVoting/>*/}
        //     {/*<Todo/>*/}
        //     <Smiles smilesKey="smiles"/>
        // </div>
    );
}