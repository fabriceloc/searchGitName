import React, { Component } from "react";
import Title from "./Title";
import Input from "./Input";
import Search from "./Search";
import Button from "./Button";

function Users(props){

    const [token, setToken] = React.useState("")

    return (
      <div>
          <div className="App">
              <Title field="Titre" color="green" /*height="400px"*/ />
              <Input placeholder="mettre le token" setField={(value) => setToken(value)}/>
              <Search placeholder="Recherche ... . . " token={token} />
              <Button title="filtrer" backgroudColor="pink" /*height="400px"*/ />
          </div>
      </div>
    );
}

export default Users;
