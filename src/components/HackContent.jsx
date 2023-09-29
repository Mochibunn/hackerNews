import { Card, CardBody, CircularProgress } from "@nextui-org/react";
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
          <Card key={singleHit.objectID} className="flex flex-row basis-4/5">
        <CardBody>
          <p className="font-bold">
          <a  target="_blank" rel="noreferrer" href={singleHit.url}>{singleHit.title}</a>
            <a className="font-normal" href={singleHit.url}> ({singleHit.url})</a>
          </p>
          <p className="text-xs">
            <a  target="_blank" rel="noreferrer" href={singleHit.url}>{singleHit.points} points</a> |
            <a  target="_blank" rel="noreferrer" href={singleHit.url}> {singleHit.author}</a> |
            <a  target="_blank" rel="noreferrer" href={singleHit.url}> {dateDiff(singleHit.created_at)}</a> |
            <a  target="_blank" rel="noreferrer" href={singleHit.url}> {singleHit.num_comments} comments</a>
          </p>
        </CardBody>
      </Card> 
      ) }) : <CircularProgress label="Loading 🐰⚙️" />

  )
};




export default HackContent;