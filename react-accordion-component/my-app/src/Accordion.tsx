import { useState } from 'react';
import './Accordion.css';

type topics = {
  topic: string;
  id: number;
  information: string;
};

type Props = {
  topicArray: topics[];
};

export default function Accordion({ topicArray }: Props) {
  return (
    <div>
      <Topics topicArray={topicArray} />
    </div>
  );
}

function Topics({ topicArray }: Props) {
  const [clickedTopic, setClickedTopic] = useState('');

  const topicMarkup = topicArray.map((item) => (
    <li
      key={item.id}
      // set state to an empty string if the topic clicked is the same as state, otherwise, set it to the clicked topic
      onClick={() => {
        if (clickedTopic === item.topic) {
          setClickedTopic('');
        } else {
          setClickedTopic(item.topic);
        }
      }}>
      {/* // render the title of the topic */}
      <div className="title">{item.topic}</div>
      {/* check to see if the topic matches the state, if it does not, set the class to hidden */}
      {clickedTopic === item.topic ? (
        <div className="information">{item.information}</div>
      ) : (
        <div className="hidden">{item.information}</div>
      )}
    </li>
  ));
  return <ul className="container">{topicMarkup}</ul>;
}
