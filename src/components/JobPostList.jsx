import React, { useContext } from "react";
import JobPost from "./JobPost";
import SkeletonJobPost from "./SkeletonJobPost";
import { LoadingContext, DataContext } from "./JobPosts";

const JobPostList = ({ displayAmount }) => {
  const { data } = useContext(DataContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div className="jobposts">
      {!loading &&
        data?.result?.numberOfElements > 0 &&
        data.result?.content?.map((jobPost) => (
          <JobPost jobpost={jobPost} key={jobPost.id} />
        ))}
      {loading &&
        Array.from(Array(displayAmount).keys()).map((number) => (
          <SkeletonJobPost key={number} />
        ))}
      {!loading && (data === null || !data?.result) && (
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
