import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import githubContext from '../../context/github/githubContext';

const Repos = () => {
  const context = useContext(githubContext);
  const repos = context.repos;

  return repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>);
};


export default Repos;
