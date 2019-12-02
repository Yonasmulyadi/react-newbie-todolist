import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';


class App extends Component 
{
    state = {
        userValue : "",
        currentValue : []
    }

    addCurrentValue = (e) => {
        e.preventDefault();
        let changeValue = this.state.userValue;
        this.setState(
            {
                userValue: "",
                currentValue: [...this.state.currentValue, changeValue]
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
                <Header title="Todo List App" method={this.setUserValue} pushMethod={this.addCurrentValue} value={this.state.userValue}/>
                <div className="content-collection">
                    {this.state.currentValue.map(element => 
                    <Content content={element}/>)}
                </div>
            </div>
        )
    }
}

export default App;