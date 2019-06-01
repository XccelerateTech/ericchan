import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap';
import DisplayList from "../DisplayList"

class CommentCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let style = {

            maxWidth: "18rem"

        };

        let center = {

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            flexWrap: "wrap"

        };
        return (
            <div>
                <Card className="card text-white bg-secondary" style={style}>

                    <CardHeader>

                        <div style={center}>

                            <img src={this.props.image} alt="this picture" />

                        </div>

                    </CardHeader>

                    <CardTitle style={center}>

                        <h3>{this.props.author}</h3>

                    </CardTitle>

                    <CardBody style={center}>

                        <CardText> <p>Today at: {this.props.date} </p> </CardText>

                        <CardText>{this.props.comment} </CardText>

                    </CardBody>

                </Card>
            </div>
        )
    }
}

//     <div>
//         <DisplayList name={this.state.name} list = {this.state.list} />
//     </div>
// }
// }

export default CommentCard;