import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CardList () {
  const url = "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-movie-movie-theater-flaticons-lineal-color-flat-icons-7.png";
  return (
    <Card >
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          Movie review
        </Card.Text>
        <Button variant="primary"><Link to="/">View Detail</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default CardList;