import '../../../styles/_tokens.css'
import '../../../styles/generic/_reset.css'
import '../../../styles/generic/_normalize.css'
import '../../../styles/_typography.css'
import '../../../styles/_utilities.css'

import styles from './feature-table.module.css';
import { PlanPrice } from '../../PlanPrice/index.jsx'

export function Component(props) {
	return (
		<section className="feature_table">
			<div className="content_wrapper">
				<div className={`${styles.feature_table__title_wrapper} text_center`}>
					<h3 className={styles.feature_table__title}>
						{props.title}
					</h3>
				</div>
				<table>
					<thead>
						<tr>
							<th>
								<h5>Compare plans</h5>
								<p>All prices per month + IVA billed yearly</p>
							</th>
							<th>
								<PlanPrice fields={props} />
							</th>
						</tr>
					</thead>
				</table>
			</div>
		</section>
	);
}

export { fields } from './fields.jsx';

export const meta = {
	label: "Features Table"
}