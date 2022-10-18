import React, { useEffect, useState } from "react";
// import { SearchBarApi } from "components";
import { Item } from "../data/types";

const APIPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([] as Item[]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        const items = response.json();
        return items;
      })
      .then((data: Item[]) => {
        setIsLoading(false);
        setLoadedItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  console.log(loadedItems);

  return (
    <div className="container">
      <h2>API Page</h2>
      <section>{/* <MeetupList meetups={loadedMeetups} /> */}</section>
    </div>
  );
};

export default APIPage;
