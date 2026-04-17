import { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";

const ReadGroups = (props) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const { data } = await supabase
        .from("group")
        .select()
        .order("created_at", { ascending: true });

      // set state of posts
      setGroups(data);
    };
    fetchGroups();
  }, [props]);

  return (
    <div className="ReadGroup">
      {groups && groups.length > 0 ? (
        [...groups]
          .sort((a, b) => a.id - b.id)
          .map((group, index) => (
            <Card
              key={group.id}
              id={group.id}
              name={group.name}
              size={group.size}
              description={group.description}
            />
          ))
      ) : (
        <h2>{"No Challenges Yet 😞"}</h2>
      )}
    </div>
  );
};

export default ReadGroups;
