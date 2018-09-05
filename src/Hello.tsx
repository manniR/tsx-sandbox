import * as React from "react";

export default class Hello extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          title: "Event 1",
          registrations: [{ id: 1, eventId: 1, userId: 1 }]
        },
        {
          id: 2,
          title: "Event 1",
          registrations: [{ id: 1, eventId: 2, userId: 1 }]
        }
      ]
    };
  }

  public render() {
    console.log(this.state);

    return (
      <div>
        <p>Hello World from Class</p>
        <button
          onClick={() =>
            this.addEventRegistration({ id: 2, eventId: 1, userId: 2 })
          }
        >
          Add Registration
        </button>
        <button
          onClick={() =>
            this.removeEventRegistration({ id: 2, eventId: 1, userId: 2 })
          }
        >
          Remove Registration
        </button>
      </div>
    );
  }

  private addEventRegistration(registration) {
    this.setState(prevState => {
      const event = prevState.events.filter(
        event => event.id === registration.eventId
      )[0];
      event.registrations = [...event.registrations, registration];
    });
    console.log(this.state);
  }

  private removeEventRegistration(registrationToRemove) {
    this.setState(prevState => {
      const event = prevState.events.filter(
        event => event.id === registrationToRemove.eventId
      )[0];
      event.registrations = [
        ...event.registrations.filter(
          registration => registration.id !== registrationToRemove.id
        )
      ];
    });
    console.log(this.state);
  }
}
