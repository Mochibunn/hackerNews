import { Card, CardBody } from "@nextui-org/react";



const placeholderNews = {
  id: 1,
  created_at: "2006-10-09T18:21:51.000Z",
  author: "Plompy",
  title: "Y Combinator",
  url: "http://ycombinator.com",
  text: "Hello! :)",
  points: 57,
  parent_id: null,
  children: [
    {
    id: 15,
    created_at: "2006-10-09T19:51:01.000Z",
    author: "sama",
    text: "&#34;the rising star of venture capital&#34; -unknown VC eating lunch on SHR",
    points: 5,
    parent_id: 1,
    children:
        [{
          id: 17,
          created_at: "2006-10-09T19:52:45.000Z",
          author: "pg",
          text: "Is there anywhere to eat on Sandhill Road?",
          points: 5,
          parent_id: 15,
          children: []
        }
      ]
    },
    {
      id: 18,
      created_at: "2006-10-09T19:55:01.000Z",
      author: "sama",
      text: "Lorem ipsum dolor sit amet",
      points: 5,
      parent_id: 1,
      children: []
    }
  ]
}

const dateDiff = (date) => { //rewrite to take in months and days please!
  const currDate = new Date().toString();
  const currYear = currDate.substring(11, 15);
  const postYear = date.substring(0, 4);
  const timeDiff = currYear - postYear;

  return (`${timeDiff} year/s ago`);
};

const HackContent = () => {



    return (
  <Card>
    <CardBody>
      <p>
        {placeholderNews.title}
        <a href={placeholderNews.url}> ({placeholderNews.url})</a>
      </p>
      <p>
        <a href={placeholderNews.url}>{placeholderNews.points} points</a> |
        <a href={placeholderNews.url}> {placeholderNews.author}</a> |
        <a href={placeholderNews.url}> {dateDiff(placeholderNews.created_at)}</a> |
        <a href={placeholderNews.url}> {placeholderNews.children.length} comments</a>
      </p>
    </CardBody>
  </Card>
  )
};
export default HackContent;