import React from "react";
import resume from "../../assets/J Cody Eisenbach Resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Button } from "react-bootstrap";
import useMediaQuery from "../../utils/useMediaQuery";
import { SocialIcon } from "react-social-icons";
import "./style.css";

export default function Resume() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="cont">
      <div className="button-container">
        <Button
          className="dl-button"
          variant="secondary"
          sticky="top"
          href={resume}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-file-earmark-arrow-down"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
          </div>
        </Button>

        <SocialIcon
          className="linkedin"
          network="linkedin"
          url="https://linkedin.com/in/codyeisenbach"
          height="25px"
          width="25px"
        />

        <SocialIcon
          className="github"
          network="github"
          url="https://github.com/codyeisenbach"
          height="25px"
          width="25px"
        />
      </div>
      <div className="doc-div ">
        {isDesktop ? (
          <Document file={resume}>
            <div className="desktop">
              <Page className="page" pageNumber={1} scale={1} />
            </div>
          </Document>
        ) : (
          <Document file={resume}>
            <div className="mobile">
              <Page className="page" pageNumber={1} scale={0.8} />
            </div>
          </Document>
        )}
      </div>
    </div>
  );
}
