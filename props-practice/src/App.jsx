import React from "react";
import "./styles.css";

import Card from "./compoents/Card";
import contacts from "./contacts";

export default function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            tel={item.phone}
            img={item.imgURL}
            email={item.email}
          />
        );
      })}
    </>
  );
}
