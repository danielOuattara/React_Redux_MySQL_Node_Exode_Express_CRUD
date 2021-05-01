
import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTutorial } from "./../actions/tutorials.js";


class AddTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: null,
            title:"",
            description: "",
            published: false,
            submitted: false
         };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState( {
            title: e.target.value,
        })
    }

    saveTutorial() {
        const  {title, description} = this.state;
        this.props
        .createTutorial(title, description)
        .then( data => {
            this.setState( {
                id: data.id,
                title: data.title,
                description: data.description,
                published: data.published,
                submitted: true
            });
            console.log(data);
        })
        .catch(e => console.log(e))
    }

    newTutorial() {
        this.setState({
            id: null,
            title: "",
            description: "",
            published: false,
            submitted: false
        })
    }




    render() { 
        return (  );
    }
}
 
export default connect(null, { createTutorial}) (AddTutorial);