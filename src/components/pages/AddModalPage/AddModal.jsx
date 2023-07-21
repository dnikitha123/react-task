import React from "react";
import cls from "./AddModal.module.css";
import CutLogo from "../../../assets/images/CutLogo.svg";
import CloseLogo from "../../../assets/images/CloseLogo.svg";

const AddModal = ({ shown, close }) => {
  const Skill = [
    {
      name: "UI/UX and Design",
    },
    {
      name: "No of Question",
    },
    {
      name: "Web Development",
    },
    {
      name: "UI/UX and Design",
    },
    {
      name: "Web Development",
    },
  ];

  return shown ? (
    <div
      className={cls.modalBackdrop}
      onClick={() => {
        close();
      }}
    >
      <div
        className={cls.modalContent}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cls.title}>
          <span className={cls.createText}>Create new assessment</span>
           <img src={CloseLogo} alt="CloseLogo" className={cls.cancel} onClick={close}/>
        </div>

        <div className={cls.lineBrk}></div>

        <div className={cls.body}>
          <div className={cls.nameText}>Name of assessment</div>
          <div className={cls.nameInput}>
            <input placeholder="Type Here" type="text" />
          </div>

          <div className={cls.purposeText}>Purpose of the test is</div>
          <div className={cls.purposeSelect}>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div className={cls.descText}>Description</div>
          <div className={cls.descSelect}>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div className={cls.skillText}>Skills</div>
          <div className={cls.skillBox}>
            {Skill.map((data) => (
              <span>
                {data.name}
                <img src={CutLogo} alt="CutLogo" className={cls.cutLogo} />
              </span>
            ))}
          </div>
          <div>
            <input
              placeholder="Type Here"
              type="text"
              className={cls.skillInput}
            />
          </div>

          <div className={cls.durationText}>Duration of assessment</div>
          <div>
            <input
              placeholder="HH:MM:SS"
              type="number"
              className={cls.durationInput}
            />
          </div>

          <button className={cls.saveBtn}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddModal;
