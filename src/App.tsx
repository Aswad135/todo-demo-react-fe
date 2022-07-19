import React from 'react';
import './App.css';
import {InputHash} from "./components/InputHash";
import {OutputComponent} from "./components/OutputComponent";
import {TodoListType} from "./types/TodoList.type";
import axios from "axios";
import {useState} from "react";

import * as http from "http";

function App() {

    //
    // let listHash: string = '';
    return (
        <div className="App">
            <InputHash />
            {/*<OutputComponent id={0}/>0*/}
        </div>
    );
}

export default App;
