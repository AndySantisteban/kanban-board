import { memo, useCallback, useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "react-responsive-modal";
import { ModalContext } from "../../context/modal.context";
import { TaskContext } from "../../context/tasks.context";
import { Task } from "../../models/task.model";

const initState = {
  id: "",
  description: "",
  status: 0,
  title: "",
};

const Form = () => {
  const { saveTask } = useContext(TaskContext);
  const { open, setOpen } = useContext(ModalContext);
  const [item, setItem] = useState<Task>({
    id: "",
    description: "",
    status: 0,
    title: "",
  });
  const create = useCallback(() => {
    saveTask(item.title, item.description);
    setItem(initState);
    setOpen(false);
  }, [item.title, item.description]);

  return (
    <>
      <button
        className="btn-primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <BiPlus /> Create Task
      </button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        styles={{
          modal: {
            backgroundColor: "#0f172a",
            borderRadius: "5px",
            width: "50%",
          },
          closeButton: {
            color: "white",
          },
        }}
        center
      >
        <h3>Create task</h3>
        <div>
          <p>Title:</p>
          <input
            type="text"
            value={item.title}
            onChange={(e) => {
              setItem((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
          />

          <p>Description:</p>
          <input
            type="text"
            value={item.description}
            onChange={(e) => {
              setItem((prev) => {
                return { ...prev, description: e.target.value };
              });
            }}
          />
          <br />
          <br />
          <button
            onClick={() => {
              create();
            }}
            className="btn-primary"
            style={{
              textAlign: "center",
            }}
          >
            create task
          </button>
        </div>
      </Modal>
    </>
  );
};

export const CreateForm = memo(Form);
