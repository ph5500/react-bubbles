import React from 'react';


class DeleteBubble extends React.Component {
    constructor(props) {
        super(props) {
            this.state = {
                Bubble: {

                }
            };
        }

        handleChanges = e => {
            this.setState({
                Bubble: {
                    ...this.state.Bubble,
                    [e.target.name]: e.target.value
                }
            });
        };

        deleteMessage = e => {
            e.preventDefault();
        };

        this.render() {
            return (
                
            )
        }
    }
}