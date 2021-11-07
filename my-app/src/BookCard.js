import React from 'react';
import { Card, CardTitle, CardImg, CardBody} from 'react-bootstrap';

const BookCard = ({
    thumbnail,
    title,
    authors,
    publisher,
    publishedDate
}) => {
    return (
        <div className="car">
            <Card style={{width:'233px'}} className='m-auto mb-3'>
            <Card.Img top style={{width:'100%', height: '220px'}} src={thumbnail} alt='card image' />
            <Card.Body>
            <Card.Title className="'card-title" style={{fontSize: '14px'}}>{title}
            </Card.Title>
            <Card.Title className="'card-title1" style={{fontSize: '11px'}}>Author:{authors}</Card.Title>
            <Card.Title className="'card-title1" style={{fontSize: '11px'}}>Publisher:{publisher}</Card.Title>
            <Card.Title className="'card-title1" style={{fontSize: '11px'}}>Publishing Date:{publishedDate}</Card.Title>
            </Card.Body>
            
            </Card>
        </div>
    )
}

export default BookCard;
