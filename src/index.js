import ReactDOM from 'react-dom';

import App from "./components/App";

import './styles.css'
import './reset.css'

function Index() {
    return (
        <App/>
    );
}


ReactDOM.render(<Index/>, document.querySelector(".root"));