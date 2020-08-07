import React, {Component} from "react";
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

function RenderDish({dish}) {
    return (<div className="row">
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={dish.comments}/>
        </div>
    </div>);
}

function RenderComments({comments}) {
    const commentList =  comments.map((comment) => {
        if(comment != null) {
            return (
                <div className="container" key={comment.id}>
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

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <RenderDish dish={props.dish}/>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;