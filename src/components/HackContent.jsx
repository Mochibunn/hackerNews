import { Card, CardBody } from "@nextui-org/react";
import axios from 'axios';
import { useEffect, useState } from "react";




const dateDiff = (date) => { //rewrite to take in months and days please!
  const currDate = new Date().toString();
  const currYear = currDate.substring(11, 15);
  const postYear = date.substring(0, 4);
  const timeDiff = currYear - postYear;

  return (`${timeDiff} year/s ago`);
};

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
            <p> {dateDiff(singleHit.created_at)}</p> |
            <p> {singleHit.num_comments} comments</p>
          </p>
        </CardBody>
      </Card> 
     ) }) : <p>not here yet!</p>

  )
};




export default HackContent;