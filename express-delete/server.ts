import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  console.log(req.method);
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const delId = Number(req.params.id);
  if (grades[delId]) {
    delete grades[delId];
    console.log('Deleted entry in grades at index:', req.params.id);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => console.log('Listening on port 8080!'));
