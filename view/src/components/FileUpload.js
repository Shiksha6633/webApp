import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const FileUpload = () => {
  const history = useHistory();
  const [picture, setPicture] = useState({});

  let name, value;
  const handleInput = (e) => {
    name = e.target.name; //getting name of input field
    value = e.target.value; //getting value entered by user in the input field

    setPicture({  
      picturePreview: URL.createObjectURL(e.target.files[0]),
      /* this contains the file we want to send */
      pictureAsFile: e.target.files[0],
    });
  };

  //sending data to backend for registeration
  const postImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", picture.pictureAsFile);
    console.log(picture.pictureAsFile);
    console.log(picture);


    // const {image} = image;
    for (var key of formData.entries()) {
      console.log("==>" + key[0] + ", " + key[1]);
    }

    const res = await fetch('/upload', {
      method: "POST",
      headers: {
        "Content-Type": "imageFile.type",
      },
      body:formData ,
    });

    const uploadedImage = await res.json();
    if (uploadedImage) {
      console.log("Successfully uploaded image");
    } else {
      console.log("Error Found");
    }
  };

  return (
    <div>
      <form method="POST" encType="multipart/form-data" onSubmit={postImage}>
        <div class="form-group">
          <input
            type="file"
            name="image"
            onChange={handleInput}
            value={picture.image}
          />
        </div>
        <button type="submit" class="btn btn-info" name="upload">
          upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
