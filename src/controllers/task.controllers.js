import Task from "../modules/Task";

const renderTask = async (req, res) => {
  const tasks = await Task.find().lean(); // lean() nos devuelve un objeto de javascript
  res.render("index", { tasks });
};

const addTask = async (req, res) => {
  try {
    const task = await new Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const taskEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

const eidtTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.redirect("/");
};

const toogleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

export { renderTask, addTask, taskEdit, eidtTask, deleteTask, toogleDone };
