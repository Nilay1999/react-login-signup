import "./App.css";
import React from "react";
import TodoList from "./components/Todo/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Sign/Login";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/Todo">
                        <div className="app-container">
                            <TodoList />
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="form-container">
                            <Login />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
