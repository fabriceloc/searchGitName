import React, { Component } from "react";
import Title from "./Title";
import Input from "./Input";
import Search from "./Search";
import Button from "./Button";
import Cookies from 'universal-cookie';

function Users(props){

    const [token, setToken] = React.useState("")

    return (
      <div>
          <div className="App">
              <Title field="Titre" color="green" /*height="400px"*/ />

              <p>
                  <Input placeholder="Token (si vous voulez)" setField={(value) => {setToken(value); (new Cookies()).set('myToken', value, { path: '/' })}}/>
                  <div> ATTENTION, PAS OBLIGATOIRE: le token va etre enregistré dans les cookies</div>
              </p>
              <Search placeholder="Recherche ... . . " token={token} />
              <Button title="filtrer" backgroudColor="pink" /*height="400px"*/ />
          </div>
      </div>
    );
}

export default Users;
