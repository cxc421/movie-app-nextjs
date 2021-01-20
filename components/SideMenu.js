import { useRef } from "react";
import { useRouter } from "next/router";
import { Modal } from "./Modal";
import { MovieCreateForm } from "./MovieCreateForm";
import { createMovie } from "../actions";

const SideMenu = ({ categories = [], appName = "" }) => {
  const modalRef = useRef();
  const router = useRouter();

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modalRef.current.closeModel();
      router.push("/"); // reload page
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
