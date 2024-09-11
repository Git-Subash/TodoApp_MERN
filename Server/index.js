import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();
const Port = process.env.PORT;
const DataBase = process.env.DATA_BASE;

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

mongoose.connect(DataBase);

const TodoSchema = new mongoose.Schema({
  title: String,
  task: String,
});

const todoModel = mongoose.model("todolist", TodoSchema);

app.get("/working", (req, res) => {
  res.json("hello");
});

app.get("/", (req, res) => {
  todoModel
    .find({})
    .then((todolist) => res.json(todolist))
    .catch((err) => res.json(err));
});

app.get("/getTodo/:id", (req, res) => {
  const id = req.params.id;
  todoModel
    .findById({ _id: id })
    .then((todolist) => res.json(todolist))
    .catch((err) => res.json(err));
});

app.post("/CreateTodo", (req, res) => {
  todoModel.create(req.body);
});

app.put("/UpdateTodo/:id", (req, res) => {
  const id = req.params.id;
  todoModel
    .findByIdAndUpdate(
      { _id: id },
      { title: req.body.title, task: req.body.task }
    )
    .then((todolist) => res.json(todolist))
    .catch((err) => res.json(err));
});

app.delete("/deleteTodo/:id", (req, res) => {
  const id = req.params.id;
  todoModel
    .findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.listen(Port, () => {
  console.log(`currently running is port https://localhost:${Port}`);
});
