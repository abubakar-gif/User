

export default function Images({ file, setFile }) {
  function handle_input_imain_image(e) {
    setFile({ ...file, main_image: e.target.files[0] });
  }

  return (
    <div>
      <input
        // className={styles.Images}
        type="file"
        onChange={handle_input_imain_image}
      />
      <br />
      <br />
    </div>
  );
}
