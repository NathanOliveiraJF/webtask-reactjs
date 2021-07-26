export function filterTaskByType(tasks, typeTask) {
  let filter = tasks.filter((i) => {
    return i.type === typeTask;
  });

  return {filter};
}
