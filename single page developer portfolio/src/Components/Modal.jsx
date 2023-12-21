function Modal({ setOpenModal }) {
  return (
    <div className="remodal" onClick={() => setOpenModal(false)}>
      <button>View Project</button>
      <button>View Code</button>
    </div>
  );
}
export default Modal;
