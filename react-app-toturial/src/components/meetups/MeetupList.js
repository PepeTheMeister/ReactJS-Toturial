import MeetupItem from "./MeetupItem";

function MeetupList(props){

    return <ul>
        {props.meetups.map(meetup => <MeetupItem key={meetup.id} 
        id = {meetup.id} 
        adress = {meetup.adress} 
        title = {meetup.title} 
        descr = {meetup.descr}/>)}
    </ul>

}


export default MeetupList;