import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
import "./Profiles.css";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/profiles");
        setProfiles(data);
        error && setError(undefined);
      } catch (err) {
        setError({
          status: err.response.status,
          errMsg: "Couldn't fetch life paths from db",
        });
      }
    };
    fetchProfiles();
  }, [error]);

  if (profiles.length < 1) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Failed to fetch life paths</div>;
  }

  return (
    <>
      <h1 style={{ color: "#fff" }}>Profiles</h1>
      <div className="profiles-grid">
        {profiles.map((profile, idx) => (
          <Profile key={idx} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default Profiles;
