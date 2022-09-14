import React, { Component } from 'react';

class Header extends Component {

    state = {}

    render() {

        return (
            <div>
                <h1>Welcome to Couch Critic</h1>
                <p>Your own theater, right in your own pocket!</p>
                <p>
                    Sick and tired of going to the theater? Want to enjoy theatrical releases from home?
                    We introduce you to Couch Critic! Watch movies that are only available in theaters right
                    from your couch.
                </p>
            </div>
        );

    }
}

export default Header;