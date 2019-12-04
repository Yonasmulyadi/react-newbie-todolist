import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';


class App extends Component 
{
    state = {
        userValue : "",
        items : [],
        key: 1
    }

    addItems = (e) => {
        e.preventDefault();
        const item = {
            key: this.state.key,
            value: this.state.userValue
        }
        this.setState(
            {
                userValue: "",
                items: [...this.state.items, item],
                key: this.state.key + 1
            }
        )
    }

    setUserValue = (e) => {
        this.setState({
            userValue: e.target.value
        })
    }

    render()
    {
        return(
            <div>
                <Header title="Todo List App" method={this.setUserValue} pushMethod={this.addItems} value={this.state.userValue}/>
                <ul className="content-collection">
                    {this.state.items.map((element) => 
                    <li key={element.key}><Content content={element.value}/></li>)}
                </ul>
            </div>
        )
    }
}

export default App;