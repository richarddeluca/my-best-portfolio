import styles from './styles.module.scss'
import Link from 'next/link'
import { useState } from 'react';


const menuItens = ['about', 'Hello', 'Contact']
export function MenuBox() {

	const [isOpen, setIsOpen] = useState(false);
	const openMenu = () => setIsOpen(!isOpen);

	return (
		<div className={styles.menuComponent}>

			<div className={isOpen === false ? styles.menuComp : styles.menuComp + ' ' + styles.active}>
				<ul>
					{menuItens.map(function (item, i) {
						return (
							<div key={i}><li className={styles.menuItem}>
								<Link href='/'>
									<a className={isOpen === false ?
										styles.menuLink : styles.menuLink + ' ' + styles.active}
										onClick={openMenu}>{item}
									</a>
								</Link>
							</li></div>
						)
					})}

				</ul>
			</div>
			<button className={isOpen === false ?
				styles.menuButton : styles.menuButton + ' ' + styles.active}
				onClick={openMenu}
			>
				<span>M</span><span>E</span><span>N</span><span>U</span>
			</button>
		</div>
	)
}