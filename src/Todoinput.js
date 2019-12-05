import React, { Component } from 'react'
import { brotliDecompressSync } from 'zlib'

export default class Todoinput extends Component {
    render() {
        const {item,handelChange,handelSubmit,editItem} = this.props
        return (
            //<div className="card card-body my-4">
                <form onSubmit={handelSubmit}>
                    <div className="input">
                        {/* <div className="input-group"> */}
                            <input type="text" className="form-control"
                            placeholder="Add todo item"
                            value={item}
                            onChange={handelChange}/>
                        {/* </div> */}
                    </div><br/>
                    <button type="submit" className={
                        editItem ?"btn btn-block btn-success mt-3"
                        : "btn btn-block btn-primary mt-3" }>{editItem ? 'edit' : "add"}</button>
                </form>
            //</div>
        );
        
    }
}