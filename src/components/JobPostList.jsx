import React, { useContext } from "react";
import { DataContext, LoadingContext } from "./JobPostsPage";
import JobPost from "./JobPost";
import SkeletonJobPost from "./SkeletonJobPost";

const JobPostList = ({ displayAmount }) => {
  const data = useContext(DataContext);
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className="jobposts">
      {!isLoading &&
        data?.result?.numberOfElements > 0 &&
        data.result?.content?.map((jobPost) => (
          <JobPost jobpost={jobPost} key={jobPost.id} />
        ))}
      {isLoading &&
        Array.from(Array(displayAmount).keys()).map((number) => (
          <SkeletonJobPost key={number} />
        ))}
      {!isLoading && (data === null || !data?.result) && (
        <div>
          <div>
            <h3>Oisann, her var det tomt!</h3>
          </div>
          <img src="/images/spongebob-cry.jpg"></img>
        </div>
      )}
    </div>
  );
};

export default JobPostList;
