
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { InputGroup, FormControl, Button, FormGroup, Form,Spinner} from 'react-bootstrap';
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard';


function App() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    setLoading(true);
    if(maxResults > 70 || maxResults < 1){
       toast.error('max results must be between 1 and 70');
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`)
      .then(res => {
        if (startIndex >= res.data.totalItems || startIndex < 1 ){
          toast.error(`max results must be between 1 and ${res.data.totalItems }`);
        } else {
          if (res.data.items.length > 0){
            setCards(res.data.items)
            setLoading(false)
            console.log(cards)
          }
        }
          console.log(res.data);
      })
      .catch(err => {
        setLoading(true)
        toast.error(`${err.response.data.error.message}`)
      });
    }
    
  };
  const mainHeader = () => {
    return (
      <div id="con">
    <div className="container">
         <div className="search">
         <InputGroup className="mb-3">
    <FormControl
      placeholder="Find your desire books"
      aria-label="Username"
      aria-describedby="basic-addon1"
      value= {query}
      onChange={e => setQuery(e.target.value)}
    />
  </InputGroup>
            <div className="d-flex text-white justify-content-center">

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-muted">
      Max Results
    </Form.Text>
    <Form.Control type="email" placeholder="Max Results" 
      value= {maxResults}
      onChange={e => setMaxResults(e.target.value)}
    />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-muted">
      Start Index
    </Form.Text>
    <Form.Control type="email" placeholder="Start Index" 
      value= {startIndex}
      onChange={e => setStartIndex(e.target.value)}
    />
    
  </Form.Group>
 
            </div>
            <Button className="but" variant="primary" onClick={handleSubmit}>Search
            </Button>
         </div>
      </div>
    </div>
    )
  }

  const handleCards = () => {
    console.log(cards)
    const items = cards.map((item, i) => {
       let thumbnail = '';
      if(item.volumeInfo.imageLinks.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return(
        
         <div className="col-lg-3 mb-3" key={item.id}>
            <BookCard 
            thumbnail={thumbnail} 
            title={item.volumeInfo.title} 
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            publishedDate={item.volumeInfo.publishedDate}
            />
         </div>

      )
    })
    if(loading){
      return (
        <div className= 'd-flex justify-content-center mt-3'>
        <Spinner animation="border" style={{width: '3rem', height: '3rem'}} />

        </div>
      );
      
      }else {
        return (
          <div className="container my-5"> 
              <div className="row"> {items}</div>
          </div>
        );
    }
  }
  return (
    <div className="w-100 h-100">
        {mainHeader()}
        {handleCards()}
        <ToastContainer />
        
      
      </div>
      );
    
  
  
}

export default App;
