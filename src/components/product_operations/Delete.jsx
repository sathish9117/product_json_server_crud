import Modal from "../Modal";

const Delete = (toggleDeldModal, ...props) => {
  return (
    <div>
      <Modal title="Confirm Delete" {...props} btn_img closeImg></Modal>
    </div>
  );
};

export default Delete;
