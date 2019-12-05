import React, { Component } from 'react'

export default class Todoitem extends Component {
    render() {
        const {title,handelDelete,handelEdit} = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
              <h6>{title}</h6>
              <div className="todo-icon">
              {/* <input type="text" key={item.id} title={item.title}/> */}
                  <span className="mx-2 text-success" onClick={handelEdit}>
                      <i className="fas fa-pen"/>
                  </span>
                  <span className="mx-2 text-danger" onClick={handelDelete}>
                      <i className="fas fa-trash"/>
                  </span>
                  </div>  
            </li>
        )
    }
}