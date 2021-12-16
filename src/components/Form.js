import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = (props) => {

  const { colorBox, setColorBox } = props;

  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setColorBox([...colorBox,
    {
      color: color,
      height: height,
      width: width,
    }])

    setColor("");
    setHeight("");
    setWidth("");
  }

  return (

    <div className = {styles.mainDiv}>
      <form onSubmit={submitHandler} className = {styles.form}>
        <div>
          <div className = {styles.inputAndLabel}>
            <label className={styles.label}>Color</label>
            <input
              onChange={(e) => { setColor(e.target.value) }}
              type="text"
              value={color}
              name="color"
            />
          </div>
          <div className = {styles.inputAndLabel}>
            <label className={styles.label}>Height</label>
            <input
              onChange={(e) => { setHeight(e.target.value) }}
              type="text"
              value={height}
              name="height"
            />
          </div>
          <div className = {styles.inputAndLabel}>
            <label className={styles.label}>Width</label>
            <input
              onChange={(e) => { setWidth(e.target.value) }}
              type="text"
              value={width}
              name="width"
            />
          </div>
        </div>
        <input className = {styles.inputButton} type="submit" value="Add" onClick={submitHandler} />
      </form>
    </div>

  );

};

export default Form;