import { useState } from "react";

const MovieCreateForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    rating: undefined,
    image: "",
    cover: "",
    longDesc: "",
    genre: [],
  });

  const handleNameInputChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSelectChange = ({ target: { name, options } }) => {
    const value = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={form.name}
          onChange={handleNameInputChange}
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={form.description}
          onChange={handleNameInputChange}
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          name="rating"
          value={form.rating}
          onChange={form.rating}
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={form.image}
          onChange={handleNameInputChange}
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          className="form-control"
          id="cover"
          name="cover"
          value={form.cover}
          onChange={handleNameInputChange}
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          className="form-control"
          id="longDesc"
          name="longDesc"
          value={form.longDesc}
          onChange={handleNameInputChange}
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre"
          name="genre"
          value={form.genre}
          onChange={handleSelectChange}
        >
          <option value="drama">drama</option>
          <option value="music">music</option>
          <option value="adventure">adventure</option>
          <option value="historical">historical</option>
          <option value="action">action</option>
        </select>
      </div>
    </form>
  );
};

export { MovieCreateForm };
