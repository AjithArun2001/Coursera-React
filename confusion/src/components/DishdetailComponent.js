import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>);
    }
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    });
    return (
        <div style={{ float: "left" }} className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">
                {cmnts}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    const dish = props.selecteddish;
    if (dish == null) {
        return (<div></div>);
    }
    return (
        <div className="container">
            <div style={{ float: "left" }} width="100%" className="col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
            </div>
            <div>
                <RenderComments comments={dish.comments} />
            </div>
        </div>
    );
}


export default DishDetail;