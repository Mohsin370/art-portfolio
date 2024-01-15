import styles from "./artWork.module.css";

function ArtWork(props) {
  return (
    <>
      <img className={styles.image} src={props.image} loading="lazy"></img>
      <p>{props.name}</p>
    </>
  );
}

export default ArtWork;
