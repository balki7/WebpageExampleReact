import React, {Component} from "react";
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    renderComments(comments) {
        const commentList =  comments.map((comment) => {
            if(comment != null) {
                return (
                    <div class="container">
                        <li key={comment.id} className="mt-3 mb-3">
                            {comment.comment}
                            <br/>
                            -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </div>
                );
            }
            else{
                return (
                    <div></div>
                );
            }
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    }

    renderDish(dish) {
        return (<div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>
                            {this.props.dish.name}
                        </CardTitle>
                        <CardText>
                            {this.props.dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(dish.comments)}
            </div>
        </div>);
    }

    render() {
        if (this.props.dish != null) {
            return this.renderDish(this.props.dish);
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;