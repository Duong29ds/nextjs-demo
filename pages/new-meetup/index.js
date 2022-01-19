import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  }
  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUpPage;
