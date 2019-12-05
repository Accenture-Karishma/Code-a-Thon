import React, { Component } from 'react'
import Todoitem from './Todoitem';
export default class Todolist extends Component {
    render() {
        const { items,clearList,handelDelete,handelEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todolist</h3>
                {
                    items.map(item => {
                        return(
                            <div>
                            <Todoitem key={item.id} title={item.title} 
                            handelDelete={()=> handelDelete(item.id)}
                            handelEdit={()=> handelEdit(item.id)}/>
                            </div>
                        )
                    })
                }

                <button type="button" className="btn btn-danger" onClick={clearList}>Clear</button>
            </ul>
        )
    }
}
