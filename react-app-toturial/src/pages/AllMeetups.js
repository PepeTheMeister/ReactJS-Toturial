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
  return (
    <div className="mt-4 ms-3">
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={data}/>
    </div>
  );
}

export default AllMeetupsPage;
