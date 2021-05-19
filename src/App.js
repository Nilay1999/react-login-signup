import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Todo">Todo List</Link>
                        </li>
                        <li>
                            <Link to="/Form">Form Signup</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/Todo">
                        <div className="todo-app">
                            <TodoList />
                        </div>
                    </Route>
                    <Route path="/Form">
                        <Form />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
