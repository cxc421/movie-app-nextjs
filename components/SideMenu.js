import { useRef } from "react";
import { Modal } from "./Modal";
import { MovieCreateForm } from "./MovieCreateForm";
import { createMovie } from "../actions";

const SideMenu = ({ categories = [], appName = "" }) => {
  const modalRef = useRef();

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      // Close modal after create
      // console.log(JSON.stringify(movies));
      console.log(movies);
      modalRef.current.closeModel();
    });
  };

  return (
    <>
      <Modal ref={modalRef} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map((c) => (
          <a key={c.id} href="#" className="list-group-item">
            {c.name}
          </a>
        ))}
      </div>
    </>
  );
};

export { SideMenu };
