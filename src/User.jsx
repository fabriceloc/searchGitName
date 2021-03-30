import React, { Component } from "react";
import Title from "./Title";
import Image from "./Image";
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';

function User(props){

    const baseUrl = "https://api.github.com/user/"
    const [person, setPerson] = React.useState([])
    const [repos, setRepos] = React.useState([])
    const [url, setUrl] = React.useState(baseUrl + props.match.params.id)
    React.useEffect(() => {
        async function myFetch() {
            let token = (new Cookies()).get('myToken')
            const resp = await fetch(url, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Authorization: ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            const json = await resp.json()
            setPerson(json)
            const resp2 = await fetch(url + "/repos", {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Authorization: ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            const json2 = await resp2.json()
            setRepos(json2)
        }
        myFetch().then(r => null)
    }, [url]);
    return (
      <div>
          <Title field={person.login} backgroudColor="orange"/>
          <Image urlImage={person.avatar_url} height={"150px"}/>
          <ul>{repos.map(r => <li key={r.id}><Link to={{ pathname: "/repo/" + r.id, repo : r}}>{r.name} - {r.id}</Link></li>)}</ul>
      </div>
    );
}

export default User;
