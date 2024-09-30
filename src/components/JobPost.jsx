import React from "react";
import { Link } from "react-router-dom";

const JobPost = ({ jobpost }) => {
  // Finds html tags and -, &nbsp;, &amp;
  const htmlRegex = /(<([^>]+)>|-|&nbsp;|&amp;)/gi;
  return (
    <>
      <div className="jobpost">
        {jobpost?.company_image_url && (
          <img src={jobpost.company_image_url}></img>
        )}
        <h2>
          <Link to={`/jobposts/${jobpost?.id}`}>
            {jobpost?.title}
          </Link>
        </h2>
        <p className="mt-1">
          {jobpost?.description.replace(htmlRegex, " ").slice(0, 160)}...
        </p>
      </div>
    </>
  );
};

export default JobPost;
