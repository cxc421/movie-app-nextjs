import { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(({ children, hasSubmit = false }, ref) => {
  const closeBtnRef = useRef();

  const handleSaveChanges = () => {
    closeBtnRef.current.click();
  };

  useImperativeHandle(ref, () => ({
    closeModel: handleSaveChanges,
  }));

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Create Movie
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Movie
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                ref={closeBtnRef}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {hasSubmit && (
                <button
                  onClick={handleSaveChanges}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export { Modal };
