import React, { Component } from 'react';

class Joke extends Component {

    state = {
        joke: ""
    }

    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('joke') === null)
                this.setState({ joke: "loading..." })
            else
                this.setState({ joke: localStorage.getItem('joke') });
        }
      
        fetch("https://api.chucknorris.io/jokes/random")
          .then(res => {
              return res.json();
          }).then(res => {
              this.setState({ joke: res.value });
              console.log('Intentar')
              console.log(res.value)
              localStorage.setItem('joke', res.value);
          });
      }

    render() {
        return (
            <div>
                <h1>
                    {this.state.joke}
                </h1>
            </div>
        );
    }
}

export default Joke;