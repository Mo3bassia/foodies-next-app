"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const inputRef = useRef(null);
  const [pickedImage, setPickedImage] = useState(null);

  function handleSubmit() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function handleImageChange(e) {
    const image = e.target.files[0];
    if (!image) setPickedImage(null);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = function () {
      setPickedImage(fileReader.result);
    };
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage ? (
            <Image fill src={pickedImage} alt="picked image"></Image>
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          type="file"
          className={styles.input}
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={handleImageChange}
        ></input>
        <button className={styles.button} onClick={handleSubmit} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
