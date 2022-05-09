// Inspired by Max Panchyk design on dribbble https://dribbble.com/shots/8139561-Spendings-controller/attachments/559007?mode=media

import styles from './styles.module.scss'

export function SpendingsController() {
	return (
		<section className={styles.component}>



			<section className={styles.requestContainer}>
				<div>
					<h2>Request</h2>
					<img src="" alt="incluir ganho ou despesa" />
				</div>
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th>Status</th>
							<th>Price</th>
							<th>Date created</th>
							<th>Recurrency</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Wood Wall Shelf</td>
							<td>investimento</td>
							<td>205</td>
							<td>12/12/2022</td>
							<td>every 30 days</td>
						</tr>
						<tr>
							<td>Wood Wall Shelf</td>
							<td>investimento</td>
							<td>205</td>
							<td>12/12/2022</td>
							<td>every 30 days</td>
						</tr>
						<tr>
							<td>Wood Wall Shelf</td>
							<td>investimento</td>
							<td>205</td>
							<td>12/12/2022</td>
							<td>every 30 days</td>
						</tr>
						<tr>
							<td>Wood Wall Shelf</td>
							<td>investimento</td>
							<td className={styles.withdraw}>200</td>
							<td>12/12/2022</td>
							<td>every 30 days</td>
						</tr>								<tr>
							<td>Wood Wall Shelf</td>
							<td>investimento</td>
							<td className={styles.deposit}>205</td>
							<td>12/12/2022</td>
							<td>every 30 days</td>
						</tr>
					</tbody>
				</table>
				<article>
					<div>
						<div>
							<span className={styles.lucro}>100 lucro</span>
							<span className={styles.dividendo}>100 prejuizo</span>
						</div>
						<div>
							<span className={styles.total}>100 total</span>
						</div>
					</div>
					<div>

						<h2>Request</h2>
						<img src="" alt="incluir ganho ou despesa" />
					</div>
				</article>
			</section>

			<footer>
				Inspired by <a href=' https://dribbble.com/shots/8139561-Spendings-controller/attachments/559007?mode=media'>Max Panchyk design on dribbble</a>
			</footer>
		</section>
	)
}