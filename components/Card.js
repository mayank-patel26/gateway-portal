import styles from '../styles/Card.module.css'
import Arrow from '../public/arrow.png'
import Image from 'next/image';
import Link from 'next/link';

const Card = (props) => {
    return ( 
        <Link className={styles.container} style={{backgroundColor: props.colorbg}} href={props.link} passHref={true}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.arrow}>
                    <Image className={styles.arrowImage} src={Arrow}></Image>
                </div>
        </Link>
    );
}
 
export default Card;