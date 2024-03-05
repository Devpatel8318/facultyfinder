import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="w-scren flex space-x-2 justify-center items-center bg-white h-screen ">
                <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
            </div>
        );
    }
}

export default Loader;
