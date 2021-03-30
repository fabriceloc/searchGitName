import React from "react";
import Input from "./Input";
import Image from "./Image";
import { Link } from "react-router-dom";

function Search(props){
    const baseUrl = "https://api.github.com/search/users?q="
    const [url, setUrl] = React.useState(baseUrl)
    const [people, setPeople] = React.useState([])
    React.useEffect(() => {
      async function fetchPeople() {
        const resp = await fetch(url, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Authorization: ' + props.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        const json = await resp.json()
        setPeople(json.items)
      }
      fetchPeople().then(r => null)
    }, [url]);

    const handleChange = (element) => {
        element && setUrl(baseUrl+element);
    };
    function handleClick(id) {
        history.push("/user" + id);
    }
    const { placeholder } = props;
    return (
      <div>
        <div>
          <form className="form-horizontal">
            <Input
              type="text"
              className="form-control"
              name="title"
              placeholder={placeholder}
              setField={(field) => handleChange(field)}
            />
          </form>
        </div>
        <div>
          <ul>
              {people && people.map(p => (<li><Link to={"/users/" + p.id}>{p.login} - {p.id} <Image height={"25px"} urlImage={p.avatar_url}/></Link></li>))}
          </ul>
        </div>
      </div>
    );
}

export default Search;
