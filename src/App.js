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

    removeItems = (id) => {
        const finalItems = [...this.state.items].filter(element => {
            return element.key !== id;
        })
        this.setState({
            items: finalItems
        })
    }

    updateItems = (id) => {
        const oldItem = [...this.state.items].filter(element => {
            return element.key === id
        });
        this.setState({
            userValue: oldItem[0].value
        });
        this.removeItems(id);
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
                        <li key={element.key}><Content content={element.value} removeMethod={this.removeItems.bind(this,element.key)} updateMethod={this.updateItems.bind(this,element.key)}/></li>)}
                </ul>
            </div>
        )
    }
}

export default App;