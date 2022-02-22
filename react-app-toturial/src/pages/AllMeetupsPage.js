import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const data = [
  {
    id: "id1",
    title: "title1",
    adress: "adress1",
    descr: "descr1",
  },
  {
    id: "id2",
    title: "title2",
    adress: "adress2",
    descr: "descr2",
  },
];

function AllMeetupsPage() {
  /*const ##### Bloco de codigo para fazer chamada a API, ter muita atencao!! ##### 
  [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

   
  useEffect(() => {
    setIsLoading(true);
    fetch("endpoint-API")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // possivelmente será necessário alterar a resposta vinda da API
        const meetups = [];

        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  ##### ACABA AQUI o bloco #####*/

  return (
    <div className="mt-3 ms-3">
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={data/*ou loadedMeetups quando houver comunicacao com BD*/} />
    </div>
  );
}

export default AllMeetupsPage;
