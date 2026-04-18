import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./EditGroup.css";
import { supabase } from "../client";

const EditGroup = ({ data }) => {
  const deleteGroup = async (event) => {
    event.preventDefault();

    await supabase.from("group").delete().eq("id", id);

    window.location = "/";
  };
  const updateGroup = async (event) => {
    event.preventDefault();

    await supabase
      .from("group")
      .update({
        name: group.name,
        size: group.size,
        description: group.description,
      })
      .eq("id", id);

    window.location = "/";
  };

  const { id } = useParams();
  const [group, setGroup] = useState({
    id: null,
    name: "",
    size: "",
    description: "",
  });
  useEffect(() => {
  const fetchGroup = async () => {
    const { data, error } = await supabase
      .from("group")
      .select()
      .eq("id", id)
      .single();

    if (data) {
      setGroup(data);
    }
  };

  fetchGroup();
}, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGroup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={updateGroup}>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={group.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="size">Size</label>
        <br />
        <input
          type="text"
          id="size"
          name="size"
          value={group.size}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={group.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
        <button type ="button" className="deleteButton" onClick={deleteGroup}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditGroup;