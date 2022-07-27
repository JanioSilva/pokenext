import Image from "next/image"

import styles from "../styles/About.module.css"

export default function about() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Nisi labore id voluptate minim cupidatat dolor tempor Lorem sunt et incididunt.</p>
            <Image src="/images/charizard.png"
            width="300"
            height="300"
            alt="Charizard"
            />
        </div>
    )
}