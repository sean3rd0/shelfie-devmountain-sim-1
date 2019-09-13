import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            name: "",
            price: 0,
            imgurl: ""
        }
    }

    render() {
        return (
            <div className="Form">
                <div>Form</div>
            </div>
        )
    }
}