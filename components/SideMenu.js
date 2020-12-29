const SideMenu = ({ categories = [], appName = "" }) => (
  <>
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
