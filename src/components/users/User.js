import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, repos, getUserRepos } = githubContext;
  useEffect(() => {
    // componemtDidMount
    getUser(match.params.login);
    getUserRepos(match.params.login, 3);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt={login}
              className='round-img'
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a
              href={html_url}
              className='btn btn-dark my-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit Github Progile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong>
                    <span>{login}</span>
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company: </strong>
                    <span>{company}</span>
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website: </strong>
                    <span>{blog}</span>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </>
    );
  }
};

export default User;
