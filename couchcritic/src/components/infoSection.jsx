import React, { Component } from 'react';

class InfoSection extends Component {

    state = {}

    render() {

        const { text, title } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        )
    }

}

export default InfoSection;