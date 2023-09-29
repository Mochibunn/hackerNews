import { Card, CardBody } from "@nextui-org/react";

const postDate = new Date();
postDate.toISOString().split('T')[0]
// const dateDiff = ;
console.log(postDate);

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

const HackContent = () => {

  console.log(placeholderNews.title);

    return (
  <Card>
    <CardBody>
      <p>
        {placeholderNews.title}
        <a href={placeholderNews.url}> ({placeholderNews.url})</a>
      </p>
      <p>
        <a href="{placeholderNews.url}">{placeholderNews.points} points</a> |
        <a href="#"> {placeholderNews.author}</a> |
        <a href="#"> date</a> |
        <a href="#"> {placeholderNews.children.length} comments</a>
      </p>
    </CardBody>
  </Card>
  )
};
export default HackContent;