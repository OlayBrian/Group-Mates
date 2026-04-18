import { useState } from "react";
import "./CreateGroups.css";
import { supabase } from "../client";

const CreateGroup = () => {
  const [post, setPost] = useState({ name: "", size: "", description: "" });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createGroup = async (event) => {
    event.preventDefault();
    setIsGenerating(true);

    const { data, error } = await supabase
      .from("group")
      .insert({
        name: post.name,
        size: post.size,
        description: post.description,
      })
      .select();
    window.location = "/";
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="size">Size</label>
        <br />
        <input type="text" id="size" name="size" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Submit" onClick={createGroup} />
      </form>
    </div>
  );
};

export default CreateGroup;
