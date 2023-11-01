import './App.css';
import Accordion from './Accordion';
function App() {
  const topics = [
    {
      topic: 'Hypertext Markup Language',
      id: 1,
      information:
        'Hypertext Marup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it froms a triad of cornerstone technologies for the World Wide Web.',
    },
    {
      topic: 'Cascading Style Sheets',
      id: 2,
      information:
        'Hypertext Marup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it froms a triad of cornerstone technologies for the World Wide Web.',
    },
    {
      topic: 'JavaScript',
      id: 3,
      information:
        'Hypertext Marup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it froms a triad of cornerstone technologies for the World Wide Web.',
    },
  ];

  return (
    <>
      <Accordion topicArray={topics} />
    </>
  );
}

export default App;
