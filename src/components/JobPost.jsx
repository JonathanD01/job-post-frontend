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
        <div className="tags">
          {jobpost?.job_tags &&
            jobpost?.job_tags
              .slice(0, 3)
              .map((tag, index) => <p key={index}>{tag.tag.slice(0, 15)}</p>)}
        </div>
      </div>
    </>
  );
};

export default JobPost;
