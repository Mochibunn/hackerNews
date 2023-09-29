import { Card, CardBody } from "@nextui-org/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import SearchBar from './Searchbar';

const postDate = new Date();
postDate.toISOString().split('T')[0]
// const dateDiff = ;
console.log(postDate);


const HackContent = () => {
  const [newsContent, setNewsContent] = useState();
  const apiUrl = 'https://hn.algolia.com/api/v1/search?query=react';

useEffect(() => {
  axios.get(apiUrl)
    .then((response) => {
      setNewsContent(response.data)
    })
    .catch((error) => {
    console.log(error)
    });
}, []);


    return ( 
      newsContent ? newsContent.hits.map((singleHit) => { 
        return (
         <Card key={singleHit.objectID}>
        <CardBody>
          <p>
            {singleHit.title}
            <a href={singleHit.url}> ({singleHit.url})</a>
          </p>
          <p>
            <a  target="_blank" rel="noreferrer" href={singleHit.url}>{singleHit.points} points</a> |
            <p> {singleHit.author}</p> |
            <p> date</p> |
            <p> {singleHit.num_comments} comments</p>
          </p>
        </CardBody>
      </Card> 
     ) }) : <p>not here yet!</p>

  )
};




export default HackContent;