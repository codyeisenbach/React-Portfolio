import axios from "axios";
import { useQuery } from "react-query";

const endpoint = "https://api.github.com/graphql";
const GIT_QUERY = `
  {
  user(login: "codyeisenbach") {
    pinnedItems(first: 10, types: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            id
            name
            openGraphImageUrl
            url
            description
          }
        }
      }
    }
    repositories(first: 20) {
      edges {
        node {
          description
          openGraphImageUrl
          id
          name
          url
        }
      }
    }
  }
  reactSearch: search(query: "topic:react, user:codyeisenbach", type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          description
          openGraphImageUrl
          id
          name
          url
        }
      }
    }
  }
  fullstackSearch: search(query: "topic:fullstack, user:codyeisenbach", type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          description
          openGraphImageUrl
          id
          name
          url
        }
      }
    }
  }
  nextjsSearch: search(query: "topic:nextjs, user:codyeisenbach", type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          description
          openGraphImageUrl
          id
          name
          url
        }
      }
    }
  }
  }
  `;

export default function API() {
  const { data, isLoading, error } = useQuery("info", () => {
    return axios({
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_TOKEN}`,
      },
      url: endpoint,
      method: "POST",
      data: {
        query: GIT_QUERY,
      },
    }).then((response) => response.data.data);
  });

  return { data, isLoading, error };
}
