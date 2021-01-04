import Modal from "./Modal";

const SideMenu = ({ categories = [], appName = "" }) => (
  <>
    <Modal />
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

export { SideMenu };
