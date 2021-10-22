import { useState, useEffect } from "react";
import axios from "axios";

const LifePaths = () => {
  const [lifePaths, setLifePaths] = useState([]);
  const [error, setError] = useState(undefined);

  // const fetchLifePaths = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:3001/numerology");
  //     setLifePaths(data);
  //     error && setError(undefined);
  //   } catch (err) {
  //     setError({
  //       status: err.response.status,
  //       errMsg: "Couldn't fetch life paths from db",
  //     });
  //   }
  // };

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
          <h1 key={idx}>{path.title}</h1>
        ))}
      </div>
    </>
  );
};

export default LifePaths;
