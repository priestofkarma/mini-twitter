import React, { Component } from 'react';

import './post-status-filter.css';

// import {Button} from 'reactstrap'


export default class PostStatusFilter extends Component{
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'Все'},
            { name: 'like', label: 'Понравилось'}
        ]
    }
    render() {

        const buttons = this.buttons.map(({ name, label }) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const color = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                // <Button  color={color.color} key={name}>{label}</Button>
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${color}`}
                    onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
                {/* <button type="button" className="btn btn-outline-secondary">Понравилось</button> */}
            </div>
        )
    }
}
