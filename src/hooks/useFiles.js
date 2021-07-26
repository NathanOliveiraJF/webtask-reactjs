import { useEffect, useState } from "react"

export default function useFiles() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:3001/task';
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTasks(data))
  }, []);
  
  return {tasks}
}