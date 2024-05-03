import React, { useEffect, useState } from "react";
import { getJobPostFromId } from "../services/JobPostService";
import { Link, useParams } from "react-router-dom";
import { getValueFromDescriptionMap } from "../utils/JobPostUtil";
import parse from "html-react-parser";
import { handleError } from "../utils/ErrorUtil";

const JobPostDetail = () => {
  const [jobPost, setJobPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const postsToUseImageFor = ["https://karrierestart.no"];

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const result = await getJobPostFromId(id);
        if (!ignore) {
          setJobPost(result.data.result);
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [id]);

  const usePostImage = (url) => {
    for (let i = 0; i < postsToUseImageFor.length; i++) {
      if (url.replace("www", "").startsWith(postsToUseImageFor[i])) {
        return true;
      }
    }
    return false;
  };

  const groupDescription = (jobDescription) => {
    const groupedMap = new Map();

    if (jobPost && jobPost.deadline_valid) {
      groupedMap.set("Frist", [jobPost.deadline]);
    } else {
      groupedMap.set("Frist", ["Snarest"]);
    }

    // Iterate over the jobDescription array
    jobDescription.forEach(({ key, value }) => {
      // Check if the key already exists in the map
      if (groupedMap.has(key)) {
        // If yes, push the value to the existing array
        groupedMap.get(key).push(value);
      } else {
        // If no, create a new array with the value and set it as the value for the key
        groupedMap.set(key, [value]);
      }
    });

    return groupedMap;
  };

  // TODO CREDIT THE OWNER OF THE CONTENT IN THE META!!
  // TODO USE ISLOADING

  /* safe enough? parse(jobPost.description.replace("<script>", "skript")) oh well...  */

  return (
    <div className="jobpostdetail">
      <div className="jobpostdetail__img-container-grid">
        <div className="jobpostdetail__img-container">
          {usePostImage(jobPost?.image_url) && jobPost?.image_url ? (
            <img src={jobPost?.image_url}></img>
          ) : (
            <img src="/images/rainbow-waves.jpg"></img>
          )}
        </div>
        <div className="jobpostdetail__container">
          <div className="jobpostdetail__img-circle-container">
            {jobPost?.company_image_url && (
              <img src={jobPost?.company_image_url}></img>
            )}
          </div>

          <div className="jobpostdetail__content">
            <h1 className="mb-0">{jobPost?.title}</h1>
            <p className="mt-0">{jobPost?.company_name}</p>
            <small>
              {jobPost && getValueFromDescriptionMap(jobPost, "Sted")}
            </small>
          </div>

          <div className="jobpostdetail__description">
            <div>
              <div>
                {jobPost &&
                  parse(
                    jobPost.description
                      .replaceAll("<script>", "skript")
                      .replaceAll("<a", "<span")
                      .replaceAll("a/>", "span/>")
                  )}
              </div>
            </div>
            <div>
              <div className="jobpostdetail__right-section-card">
                {jobPost && jobPost.job_description && (
                  <dl>
                    {[
                      ...groupDescription(jobPost.job_description).entries(),
                    ].map(([key, values]) => (
                      <React.Fragment key={key}>
                        <dt>{key}</dt>
                        {values.map((value, index) => (
                          <dd key={index}>{value}</dd>
                        ))}
                      </React.Fragment>
                    ))}
                  </dl>
                )}
                <div className="text-center mt-3">
                  <Link
                    className="w-100 button button__larger w-100"
                    title={jobPost?.url}
                    to={jobPost?.url}
                  >
                    Gå til annonse
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {jobPost?.job_tags && (
            <div className="mt-3">
              <h2>Nøkkelord</h2>
              <div className="tags">
                {jobPost?.job_tags.map((tag, index) => (
                  <p onClick={() => alert("coming soon")} key={index}>
                    {tag.tag.slice(0, 15)}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPostDetail;
