const API_URL = "http://localhost:9000";

export async function getTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  const { data } = await res.json();
  return data;
}

export async function createTask(newTask) {
  try {
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your task");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your task");
  }
}
