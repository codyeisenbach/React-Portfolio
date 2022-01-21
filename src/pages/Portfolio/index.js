import React from "react";
import API from "../../utils/API.js";
import RepoItem from "../../components/RepoItem/index.js";
// import useMediaQuery from "../../utils/useMediaQuery";
import { SocialIcon } from "react-social-icons";
import "./style.css";

const Portfolio = (props) => {
  const { data, isLoading, error } = API();
  console.log(JSON.stringify(data));
  if (isLoading) return console.log("...loading");
  if (error) return console.log("error");
  // const isDesktop = useMediaQuery("(min-width: 960px)");

  let selectedRepos = data?.user.pinnedItems.edges;

  switch (props) {
    case "Pinned":
      selectedRepos = data?.user.pinnedItems.edges;
      break;
    case "React":
      selectedRepos = data?.reactSearch.edges;
      break;
    case "Nextjs":
      selectedRepos = data?.nextjsSearch.edges;
      break;
    case "Full Stack":
      selectedRepos = data?.fullstackSearch.edges;
      break;
    case "All":
      selectedRepos = data?.user.repositories.edges;
      break;
    default:
      selectedRepos = data?.user.pinnedItems.edges;
  }

  // console.log(getContextValue());

  //const allRepos = data?.user.repositories.edges;//

  return (
    <div className="container">
      <div className="social-links">
        <SocialIcon
          network="linkedin"
          url="https://linkedin.com/in/codyeisenbach"
          height="25px"
          width="25px"
        />

        <SocialIcon
          network="github"
          url="https://github.com/codyeisenbach"
          height="25px"
          width="25px"
        />
      </div>
      <ul className="flex-grid">
        {selectedRepos.map((repo) => (
          <RepoItem
            key={`repo${repo.node.id}`}
            id={repo.node.id}
            name={repo.node.name}
            image={repo.node.openGraphImageUrl}
            url={repo.node.url}
            description={repo.node.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
