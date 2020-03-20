import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Cards from "./components/Cards"
import {Row, PaginationItem, PaginationLink, Pagination} from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  useEffect(
    ()=>{
      axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(
        response => {console.log(response)
        setPeople(response.data.results)
        })
      .catch (error => {
        console.log('Somethings broken: '+error)
      })
  },[page] )

  console.log(people)

  function changePage(e){
    console.log("button clicked"+e)
    setPage(e)
    console.log(page)
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Row >
        {people.map((e,i) => {return (
          <Cards data={e} key={i}/>
        )})}
      </Row>
      
      <Pagination aria-label="Page navigation example">
    <PaginationItem >
        <PaginationLink first href="#" onClick={ () =>changePage(1) }/>
      </PaginationItem >
      <PaginationItem>
        <PaginationLink previous href="#" onClick={ () => page !== 1 ?  changePage(page-1) : null }/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={ () =>changePage(1) } >
          1{}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={ () =>changePage(2) }>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={ () =>changePage(3)}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={ () =>changePage(4)}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" onClick={ () =>changePage(5)}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" onClick={ () => page < 9 ? changePage(page+1) : null }/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" onClick={ () =>changePage(8) }/>
      </PaginationItem>
    </Pagination>

      
    </div>
  );
}

export default App;