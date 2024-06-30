import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => console.error(err));
    // console.log(jobs);
  }, []);

  //handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //filter jobs by tile
  const filteredItem = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItem);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  );
};

export default Home;
