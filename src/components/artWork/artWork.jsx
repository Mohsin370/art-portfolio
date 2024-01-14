import styles from './artWork.module.css'

function ArtWork(props) {
  return (
    <div className="m-5" type="button" >
      <img className={styles.image} src={props.image} loading="lazy"></img>
      <p>{props.name}</p>
    </div>
  );
}

export default ArtWork;
