import { useState, useEffect } from "react";
import axios from "axios";
import LifePath from "./LifePath";

const LifePaths = () => {
  const [lifePaths, setLifePaths] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchLifePaths = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/numerology");
        setLifePaths(data);
        error && setError(undefined);
      } catch (err) {
        setError({
          status: err.response.status,
          errMsg: "Couldn't fetch life paths from db",
        });
      }
    };
    fetchLifePaths();
  }, [error]);

  if (lifePaths.length < 1) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Failed to fetch life paths</div>;
  }

  return (
    <>
      <h1>Life Paths</h1>
      <div>
        {lifePaths.map((path, idx) => (
          <LifePath
            key={idx}
            pathNumber={path.pathNumber}
            title={path.title}
            description={path.description}
          />
        ))}
      </div>
    </>
  );
};

export default LifePaths;
