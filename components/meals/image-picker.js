"use client";
import { useRef } from "react";
import styles from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const inputRef = useRef(null);

  function handleSubmit() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          className={styles.input}
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
        ></input>
        <button className={styles.button} onClick={handleSubmit} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
