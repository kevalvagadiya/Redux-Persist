import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Discription({ data }) {
  const [role, setRole] = useState(data && data.roleType);

  useEffect(() => {
    setRole(data && data.roleType);
  }, [data.roleType]);

  console.log(role);

  return (
    <div>
      {role && role === "HIRE_DEVS" ? (
        <div>
          <div className="container">
            <div className="my4">
              <div className="row my-2">
                <div className="col-12 text-center">
                  <span class="display-4 shadow-text text-center font-weight-bold my-4">
                    Tech <span class="hl-light">Screening</span>.{" "}
                    <span class="hl-light header">Solved</span>.
                  </span>

                  <div class="uvp font-weight-bold hide-small mt-2">
                    <span class="badge badge-warning">Ask</span>{" "}
                    <span class="hl-light">Tech Questions</span> With{" "}
                    <span class="hl-light">Confidence</span>.{" "}
                    <span class="badge badge-warning">Qualify</span>{" "}
                    <span class="hl-light">Top Talents</span> in{" "}
                    <span class="hl-light">Less Time</span>.
                    <br />
                    Made For <span class="hl-light">Tech Recruiters</span>,{" "}
                    <span class="hl-light">Team Leads</span> and{" "}
                    <span class="hl-light">CTOs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="my4">
              <div className="row my-2">
                <div className="col-12 text-center">
                  <span class="display-4 shadow-text text-center font-weight-bold my-4">
                    Kill <span class="hl-light">Your</span>{" "}
                    <span class="hl-light header">Tech Interview</span>
                  </span>

                  <div class="uvp font-weight-bold hide-small mt-2">
                    <span class="badge badge-warning">3877</span>{" "}
                    <span class="hl-light">Full-Stack</span>,{" "}
                    <span class="hl-light">Coding</span> &amp;{" "}
                    <span class="hl-light">System Design</span>{" "}
                    <span class="badge badge-warning">Interview Questions</span>
                    <br />
                    <span class="hl-light">Answered</span> To Get Your Next{" "}
                    <span class="hl-light">Six-Figure Job Offer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state };
};

export default connect(mapStateToProps)(Discription);
