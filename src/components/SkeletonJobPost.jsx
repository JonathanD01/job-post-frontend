import React from "react";

const SkeletonJobPost = () => {
  return (
    <div className="jobpost">
      <div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line skeleton-line__thick"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
};

export default SkeletonJobPost;
