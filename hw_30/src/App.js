import React from 'react';
import {Smiles} from "./components/pages/smilefunction";
import {Route, Routes} from "react-router";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";
import SmileDetails from "./components/pages/smilefunction/components/SmileDetails";
import Sidebar from "./components/sidebar";

import './App.css';
import CounterRedux from "./components/pages/counter-redux";
import Learning from "./components/pages/learning";
import PostsRedux from "./components/pages/posts";
import Post from "./components/pages/posts/components/post";
import PostDetail from "./components/pages/post-detail";
import Todo from "./components/pages/todofunction";
import TodoRedux from "./components/pages/todo-redux";

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

                    <Route path="todos" element={<Todo/>}/>
                    <Route path="counter-redux" element={<CounterRedux/>}/>
                    <Route path="learning" element={<Learning/>}/>

                    <Route path="posts-redux">
                        <Route index element={<PostsRedux/>}/>
                        <Route path=":id" element={<PostDetail/>}/>
                    </Route>

                    <Route path="todos-redux">
                        <Route index element={<TodoRedux/>}/>
                        {/*<Route path=":id" element={<PostDetail/>}/>*/}
                    </Route>

                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </div>
    );
}