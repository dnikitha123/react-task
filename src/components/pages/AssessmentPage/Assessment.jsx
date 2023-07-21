import React, { useState, useEffect } from "react";
import cls from "./Assessment.module.css";
import BoxLogo from "../../../assets/images/BoxLogo.svg";
import HumanLogo from "../../../assets/images/HumanLogo.svg";
import BreakLineLogo from "../../../assets/images/BreakLineLogo.svg";
import ConnectLogo from "../../../assets/images/ConnectLogo.svg";
import WorldLogo from "../../../assets/images/WorldLogo.svg";
import AddLogo from "../../../assets/images/AddLogo.svg";
import BriefcaseLogo from "../../../assets/images/BriefcaseLogo.svg";
import ThreeDot from "../../../assets/images/ThreeDot.svg";
import CalendarLogo from "../../../assets/images/CalendarLogo.svg";
import LinkLogo from "../../../assets/images/LinkLogo.svg";
import AddModal from "../AddModalPage/AddModal";

const Assessment = () => {
  const [addModalShown, setAddModalShown] = useState(false);
  const [isDataVisible, setIsDataVisible] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsDataVisible(!isMobile);
  }, []);

  const toggleDataVisibility = () => {
    setIsDataVisible(!isDataVisible);
  };

  return (
    <div className={cls.contentWrapper}>
      <div className={cls.main}>
        <div className={cls.header}>
          <span className={cls.assessmentText}>Assessment</span>
          <span className={cls.line}></span>
          <span className={cls.myAsmntText}>My Assessments</span>
        </div>
      </div>

      <div className={cls.body}>
        <span className={cls.asmntOverViewText}>Assessments Overview</span>

        <div className={cls.showHideButton} onClick={toggleDataVisibility}>
          {isDataVisible ? "Hide Data" : "Show Data"}
        </div>

        {isDataVisible && (
          <div className={cls.asmntGroup}>
            <div className={cls.totalGrp}>
              <span className={cls.totalAsmntText}>Total Assessment</span>
              <div>
                <img src={BoxLogo} alt="BoxLogo" className={cls.boxLogo} />
                <span className={cls.boxNumber}>34</span>
              </div>
            </div>

            <span className={cls.breakLines}></span>

            <div className={cls.candidateGrp}>
              <span className={cls.candidateText}>Candidates</span>
              <div className={cls.subGrp}>
                <img src={HumanLogo} alt="HumanLogo" className={cls.humanLogo}/>

                <span className={cls.numOneGrp}>
                  <span className={cls.totalNumber}>11,145</span>
                  <span className={cls.plusNum}>+89</span>
                  <span className={cls.totalCndText}>Total Candidate</span>
                </span>

                <span className={cls.breakLogo}>
                  <img src={BreakLineLogo} alt="BreakLineLogo" />
                </span>

                <span className={cls.numTwoGrp}>
                  <span className={cls.totalNumAttempt}>1,14</span>
                  <span className={cls.plusNumAttempt}>+89</span>
                  <span className={cls.whoAttemptText}>Who Attempted</span>
                </span>
              </div>
            </div>

            <span className={cls.breakLines}></span>

            <div className={cls.candidateSorceGrp}>
              <span className={cls.candidateSrcText}>Candidates Source</span>

              <div className={cls.subGrpCndSrc}>
                <img src={WorldLogo} alt="WorldLogo" className={cls.worldLogo}/>

                <span className={cls.numOneGrpCndSrc}>
                  <span className={cls.totalNumberCndSrc}>11,000</span>
                  <span className={cls.plusNumCndSrc}>+89</span>
                  <span className={cls.emailText}>E-mail</span>
                </span>

                <span className={cls.breakLogo}>
                  <img src={BreakLineLogo} alt="BreakLineLogo" />
                </span>

                <span className={cls.numTwoGrpCndSrc}>
                  <span className={cls.totalNumSocial}>145</span>
                  <span className={cls.plusNumSocial}>+89</span>
                  <span className={cls.socialText}>Social Share</span>
                </span>

                <span className={cls.breakLogo}>
                  <img src={BreakLineLogo} alt="BreakLineLogo" />
                </span>

                <span className={cls.numThreeGrpCndSrc}>
                  <span className={cls.totalNumUnique}>145</span>
                  <span className={cls.plusNumUnique}>+89</span>
                  <span className={cls.uniqueText}>Unique Link</span>
                </span>
              </div>
            </div>

            <span className={cls.breakLines}></span>

            <div className={cls.totalPurposeGrp}>
              <span className={cls.totalPrpsText}>Total Purpose</span>
              <div>
                <img
                  src={ConnectLogo}
                  alt="ConnectLogo"
                  className={cls.connectLogo}
                />
                <span className={cls.totalPrpsNumber}>11</span>
              </div>
            </div>
          </div>
        )}

        <div className={cls.title}>My Assessment</div>
        <div className={cls.cardGrp}>
          <div className={cls.cardOne}>
            <span
              onClick={() => {
                setAddModalShown(!addModalShown);
              }}
            >
              <AddModal
                shown={addModalShown}
                close={() => {
                  setAddModalShown(false);
                }}
              ></AddModal>
              <img src={AddLogo} alt="AddLogo" />
            </span>
            <div className={cls.newAsmntText}>New Assessment</div>
            <div className={cls.para}>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </div>
          </div>

          <div className={cls.cardTwo}>
            <div className={cls.imageGrp}>
              <img src={BriefcaseLogo} alt="BriefcaseLogo" />
              <img src={ThreeDot} alt="ThreeDot" />
            </div>

            <div className={cls.mathText}>Math Assessment</div>

            <div className={cls.jobSubGrp}>
              <span className={cls.jobText}>Job</span>
              <span className={cls.strikeBrdr}></span>
              <img
                src={CalendarLogo}
                alt="CalendarLogo"
                className={cls.calLogo}
              />
              <span className={cls.dateText}>20 Apr 2023</span>
            </div>

            <div className={cls.brkLine}></div>

            <div className={cls.durationGrp}>
              <span className={cls.mainSubGrp}>
                <span>
                  <span className={cls.durSubGrp}>
                    <span className={cls.durNum}>00</span>
                    <div className={cls.durtnText}>Duration</div>
                  </span>

                  <span className={cls.qustnSubGrp}>
                    <span className={cls.quesNum}>00</span>
                    <div className={cls.qtsnText}>Questions</div>
                  </span>
                </span>

                <span className={cls.shareSubGrp}>
                  <button className={cls.shareBtn}>
                    <img src={LinkLogo} alt="LinkLogo" />
                    Share
                  </button>
                  <span className={cls.nameText}>LP</span>
                </span>
              </span>
            </div>
          </div>

          <div className={cls.cardThree}>
            <div className={cls.imageThreeGrp}>
              <img src={BriefcaseLogo} alt="BriefcaseLogo" />
              <img src={ThreeDot} alt="ThreeDot" className={cls.imgdd} />
            </div>

            <div className={cls.mathThreeText}>Math Assessment</div>

            <div className={cls.jobSubThreeGrp}>
              <span className={cls.jobText}>Job</span>
              <span className={cls.strikeThreeBrdr}></span>
              <img
                src={CalendarLogo}
                alt="CalendarLogo"
                className={cls.calLogo}
              />
              <span className={cls.dateText}>20 Apr 2023</span>
            </div>

            <div className={cls.brkLine}></div>

            <div className={cls.durationGrp}>
              <span className={cls.mainSubGrp}>
                <span>
                  <span className={cls.durSubGrp}>
                    <span className={cls.durNum}>00</span>
                    <div className={cls.durtnText}>Duration</div>
                  </span>

                  <span className={cls.qustnSubGrp}>
                    <span className={cls.quesNum}>00</span>
                    <div className={cls.qtsnText}>Questions</div>
                  </span>
                </span>

                <span className={cls.shareSubGrp}>
                  <button className={cls.shareBtn}>
                    <img src={LinkLogo} alt="LinkLogo" />
                    Share
                  </button>

                  <span className={cls.nameTwoText}>LP</span>
                  <span className={cls.nameThreeText}>LP</span>
                  <span className={cls.nameFourText}>LP</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
