import styles from "./artWork.module.css";

function ArtWork(props) {
  return (
    <div role="button" className={styles.imgContainer}>
      <img className={styles.image} src={props.image} loading="lazy" alt="Art Work Display Image" ></img>
      <p>{props.name}</p>
    </div>
  );
}

export default ArtWork;
