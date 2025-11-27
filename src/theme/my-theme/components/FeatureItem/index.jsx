import { Island } from '@hubspot/cms-components';
import styles from './feature-item.module.css';
import IconCheck from '../../assets/Icons/IconCheck.jsx';
import Tooltip from '../Tooltip/index.jsx?island';

export function FeatureItem(props) {
	const {
		featureCategory,
		featureItems,
		tooltipFieldPath,
		planAmount
	} = props;

	return (
		<>
			<tr>
				<th className={styles.feature_table__category} scope='rowgroup'>
					{featureCategory}
				</th>
				{
					planAmount.map((plan, index) => <th key={index} className={styles.feature_table__category}></th>)
				}
			</tr>
			{
				featureItems.map((item, index) => (
					<tr key={index}>
						<th scope='row'>
							<div className={styles.feature}>
								<p className={styles.feature__item}>
									{item.featureName}
								</p>
								{
									item.showTooltip &&
									<Island 
										module={Tooltip}
										wrapperClassName='flex_center'
										text={`${tooltipFieldPath}.featureItems[${index}].tooltipText`}
										clientOnly={true}
									/>
								}
							</div>
						</th>
						<td>
							{
								item.featuresData.optionA.planStarter &&
								<div className="flex_center">
									{
										item.featuresData.optionA.dataOptionA === "icon"
										? <IconCheck height={24} stroke={"currentColor"} />
										: item.featuresData.optionA.optionAText
									}
								</div>
							}
						</td>
						<td>
							{
								item.featuresData.optionB.planPlus &&
								<div className="flex_center">
									{
										item.featuresData.optionB.dataOptionB === "icon"
										? <IconCheck height={24} stroke={"currentColor"} />
										: item.featuresData.optionB.optionBText
									}
								</div>
							}
						</td>
						<td>
							{
								item.featuresData.optionC.planVIP &&
								<div className="flex_center">
									{
										item.featuresData.optionC.dataOptionC === "icon"
										? <IconCheck height={24} stroke={"currentColor"} />
										: item.featuresData.optionC.optionCText
									}
								</div>
							}
						</td>
					</tr>
				))
			}
		</>
	);
}