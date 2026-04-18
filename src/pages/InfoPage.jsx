import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import "./InfoPage.css";
import { supabase } from "../client";

const InfoPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

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

  if (!group) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="InfoPage">
      <p>id: {group.id}</p>
      <h1>{group.name}</h1>
      <h2>Size: {group.size}</h2>
      <p>{group.description}</p>
      <p>Date Created: {new Date(group.created_at).toLocaleString()}</p>

      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default InfoPage;
