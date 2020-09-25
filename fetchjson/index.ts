import axios from "axios";
const url = "http://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((response) => {
  const todo = response.data;
  const id = todo.ID;
  const title = todo.title;
  const finished = todo.finished;

  console.log(`
    The todo with ${id}
    Has a title pf: ${title}
    Is it finished? ${finished}
  `)
});
