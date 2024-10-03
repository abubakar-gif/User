import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./input.module.css";
import Images from "./Image";

export default function Input({ handleclick_main_image }) {
  /*const [value, setValue] = useState({
    title: "",
    description: "",
    First_block_description: "",
    type_item: "",
    button_style: "",
  });*/

  const [items, setItems] = useState({
    title: "",
    description: "",
    First_block_description: "",
    type_item: "",
    button_style: "",
  });

  const [file, setFile] = useState({
    main_image: "",
  });

  function handleclick_main_image(e) {
    const formdata = new FormData();
    formdata.append("items", JSON.stringify(items));
    formdata.append("image", file.main_image);

    axios
      .post("https://bestdeals-api-90f1c78ac0d8.herokuapp.com/api/image", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        window.location.reload();
        alert("data saved👍");
      })
      .catch((err) => {
        alert("you did something wrong☠️");
      });
  }

  function handlesubmit(e) {
    e.preventDefault();

    handleclick_main_image();
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        {/* title */}
        <div className={styles.inputbox}>
          <input
            className={styles.title}
            onChange={(e) => setItems({ ...items, title: e.target.value })}
            placeholder=" Title"
            type="text"
            name=""
            id=""
            value={items.title}
          />
        </div>
        <p className={styles.p}>{`Electronics
        Gaming
        Jewellery
        sports
        books`}</p>

        <div className={styles.inputblock}>
          <div className={styles.Images}>
            <Images setFile={setFile} file={file} />
          </div>

          {/* description */}
          {
            <textarea
              rows={12}
              cols={30}
              className={styles.description}
              onChange={(e) =>
                setItems({ ...items, description: e.target.value })
              }
              placeholder=" description"
              type="text"
              name=""
              id=""
              value={items.description}
            />
          }

          <div className={styles.inputbox2}>
            {/*  First_block_description(fbd) */}
            <input
              className={styles.fbd}
              onChange={(e) =>
                setItems({ ...items, First_block_description: e.target.value })
              }
              placeholder="First_block_description(fbd)"
              type="text"
              name=""
              id=""
              value={items.First_block_description}
            />
            {/*  type_item*/}
            <input
              className={styles.type}
              type="text"
              onChange={(e) =>
                setItems({ ...items, type_item: e.target.value })
              }
              placeholder="type_item"
              value={items.type_item}
            />

            {/* button style */}
            <textarea
              rows={5}
              cols={30}
              className={styles.buttons}
              onChange={(e) =>
                setItems({ ...items, button_style: e.target.value })
              }
              placeholder="link"
              type="text"
              value={items.button_style}
            />
            <button className={styles.submitbutton}>submit</button>
          </div>
        </div>
        
      </form>
    </div>
  );
}
