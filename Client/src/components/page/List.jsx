import * as React from "react";
import { Link } from "react-router-dom";
import { Check, ClipboardEdit, X } from "lucide-react";
import { useState, useEffect } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const List = () => {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios
      .get("https://todo-server-sage.vercel.app")
      .then((result) => {
        const todosData = Array.isArray(result.data)
          ? result.data
          : result.data.todos; // Adjust according to API response
        setTodos(todosData);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(todos);
  const handleDelete = (id) => {
    axios
      .delete("https://todo-server-sage.vercel.app/deleteTodo/" + id)
      .then((res) => {
        console.log(res);
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };
  const handleComplete = (id) => {
    axios
      .delete("https://todo-server-sage.vercel.app/deleteTodo/" + id)

      .then((res) => {
        console.log(res);
        setComplete(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setComplete(false);
    setOpen(false);
    window.location.reload();
  };

  return (
    <main>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Click and add new task"
        arrow>
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{
            times: [0, 1],
            duration: 1,
            delay: 0.2,
            // ease: [0, 0.71, 0.5, 1.01]
          }}
          className=" w-full mt-10 flex flex-wrap align-middle justify-center   ">
          <Typography variant="h1" color="purple">
            {" "}
            <Link
              to="/Create"
              className=" flex   backdrop-blur-sm bg-white/30 capitalize font-bold tracking-wider rounded-md  py-4  px-24 text-center">
              Todo App <span className=" text-4xl">+</span>
            </Link>{" "}
          </Typography>
        </motion.div>
      </Tooltip>
      <div className=" h-screen  mt-10 pt-8 rounded-lg md:flex md:flex-wrap gap-x-8  md:justify-center   pl-2   bg-fixed  overflow-x-hidden scroll-smooth">
        {/* Card */}
        {Array.isArray(todos) &&
          todos.map((todo) => (
            <div className="flex flex-wrap  justify-center   ">
              <div className=" rounded-none mb-4   border-slate-500  ">
                <motion.div
                  initial={{ opacity: 0, y: 400, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    // easein: [0, 0.71, 0.5, 1.01]
                  }}
                  className=" py-8 rounded-lg backdrop-blur-sm bg-white/30 text-[#000000c8]  ">
                  <div className="flex justify-between">
                    <Typography
                      className="pb-8  pl-8 text-lg font-pop font-extrabold tracking-wide capitalize "
                      color="purple">
                      {todo.title}
                    </Typography>

                    <Stack className="">
                      <div>
                        <Tooltip
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                          title="Complete"
                          arrow
                          placement="bottom-start">
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            className=" mr-4   text-green-600 "
                            onClick={(e) => handleComplete(todo._id)}>
                            <Check />{" "}
                          </motion.button>{" "}
                        </Tooltip>
                        <Tooltip
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                          title="Delete"
                          arrow
                          placement="bottom-start">
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            className=" mr-6 px-1  text-red-600  "
                            onClick={(e) => handleDelete(todo._id)}>
                            <X />
                          </motion.button>{" "}
                        </Tooltip>
                      </div>
                    </Stack>
                  </div>
                  <p className="pb-8 pl-8  text-md font-pop w-[450px] text-left">
                    {todo.task}
                  </p>
                  <div className="flex justify-between pr-8">
                    <h6 className="pl-8 pt-2  text-xs font-pop">{getDate()}</h6>
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="Update"
                      arrow
                      placement="bottom-start">
                      <IconButton color="purple">
                        {" "}
                        <Link to={`/Modify/${todo._id}`}>
                          {" "}
                          <ClipboardEdit />{" "}
                        </Link>{" "}
                      </IconButton>
                    </Tooltip>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        <Snackbar open={complete} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}>
            Task Completed!
          </Alert>
        </Snackbar>

        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Task deleted successfully!
          </Alert>
        </Snackbar>
      </div>
    </main>
  );
};
