function Modal(props) {
  return (
    <div className="remodal" onClick={() => props.setOpenModal(false)}>
      <button>View Project</button>
      <button>View Code</button>
    </div>
  );
}
export default Modal;
