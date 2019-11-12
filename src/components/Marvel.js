import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Marvel extends Component {

    state = {
        marvel: []
    }



    componentDidMount() {

        let ts = 'perreointenso'
        let hash = 'b05bde4b411df384ea93cd763c76bf13'
        let apikey = '6a2dcff72251ef8779d9d5560cb5ea67'

        if (!navigator.onLine) {
            if (localStorage.getItem('marvel') === null)
                this.setState({ joke: "loading..." })
            else
                this.setState({ joke: localStorage.getItem('marvel') });
        }

        fetch("https://gateway.marvel.com:443/v1/public/characters?ts=" + ts + "&hash=" + hash + "&apikey=" + apikey)
            .then(res => {
                return res.json()
            }).then(res => {
                console.log(res.data.results)
                this.setState({ marvel: res.data.results })
                localStorage.setItem('marvel', res.data.results);
            });
    }

    render() {
        return (
            <div>
                <CardGroup>
                    {this.state.marvel.map((e, i) => {
                        return (
                            <Card key={i}>
                                <Card.Title>
                                    <strong>{e.name}</strong>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {e.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                    })}
                </CardGroup>
            </div>
        );
    }
}

export default Marvel;