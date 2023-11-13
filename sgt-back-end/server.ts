import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

// type grade = {
//   course: string,
//   name: string,
//   score: number
// }

const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (!grade) {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows;
    // We could not have known ahead of time without actually querying the db,
    // but the specific grade being requested was not found in the database.
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const { name, course, score } = req.body;
    // if (newGrade.course === undefined || newGrade.name === undefined || newGrade.score === undefined){
    //   throw new ClientError(400, 'missing information');
    // };
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;

    const params = [name, course, score];
    const result = await db.query(sql, params);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows;
    // We could not have known ahead of time without actually querying the db,
    // but the specific grade being requested was not found in the database.
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const { name, course, score } = req.body;
    // if (newGrade.course === undefined || newGrade.name === undefined || newGrade.score === undefined){
    //   throw new ClientError(400, 'missing information');
    // };
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      update "grades"
      set "name" = $1,
          "course" = $2,
           "score" = $3
    where "gradeId" = $4
      returning *;
    `;
    // $1, $2, and $3 are the body attributes, where $4 is the id param
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows;
    // We could not have known ahead of time without actually querying the db,
    // but the specific grade being requested was not found in the database.
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // if (newGrade.course === undefined || newGrade.name === undefined || newGrade.score === undefined){
    //   throw new ClientError(400, 'missing information');
    // };
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      delete
      from "grades"
      where "gradeId" = $1
      returning *;
    `;
    // $1, $2, and $3 are the body attributes, where $4 is the id param
    const params = [gradeId];
    const result = await db.query(sql, params);
    console.log(result.rows);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    // const grade = result.rows;
    // We could not have known ahead of time without actually querying the db,
    // but the specific grade being requested was not found in the database.
    // The specific grade was found in the database, yay! Return it.
    res.sendStatus(204);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => console.log('Started listening on port 8080!'));
