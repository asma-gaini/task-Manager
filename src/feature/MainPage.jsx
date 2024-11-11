// import { useSelector } from "react-redux";
// import { getTask } from "../store/slice/taskSlice";
import { useLoaderData } from "react-router-dom";
import { getTasks } from "../services/apiTasks";

function MainPage() {
  const tasks = useLoaderData();
  console.log(tasks);

  return <div>main</div>;
}

export async function loader() {
  const tasks = await getTasks();
  return tasks;
}

export default MainPage;
