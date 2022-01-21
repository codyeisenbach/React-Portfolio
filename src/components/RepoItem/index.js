import React from "react";
import "./style.css";

function RepoItem(props) {
  const { id, url, image, name, description } = props;
  return (
    <li className=" column card img-container" key={id}>
      <img
        className=" content img-container"
        alt="project_image"
        href={url}
        src={image}
      />

      <a className="repo-title link" href={url}>
        {name}
      </a>
      <p className="description">{description}</p>
    </li>
  );
}

export default RepoItem;
