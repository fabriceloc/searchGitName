import React  from "react";
import Starts from "./Starts";
import Button from "./Button";

function Repo(props){

    const {repo} = props.location;

    return (
      <div>
          {repo ? (
              <div>
                  <p> {repo.name}</p>
                  <p>{repo.language}</p>
                  <p>
                      <Starts number={repo.stargazers_count}/>
                  </p>
                  <p>
                      { repo.description }
                  </p>
                  <p>
                      cre: {new Date(repo.created_at).toDateString()}
                  </p>
                  <p>
                      up:  {new Date(repo.updated_at).toDateString()}
                  </p>

                  <a href={repo.html_url}><Button title={"Visit github page"} backgroudColor={"green"}/></a>
              </div>
              ) :
              (<div> retourner a la page home</div>
              )}
      </div>
    );
}

export default Repo;
