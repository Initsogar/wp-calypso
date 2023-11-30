import { PricingSlider } from '@automattic/components';
import classNames from 'classnames';
import { useTranslate } from 'i18n-calypso';
import React, { useState } from 'react';
import useAvailableUpgradeTiers from './stats-purchase-tier-upgrade-slider-utils';

import './stats-purchase-tier-upgrade-slider.scss';

type TierUpgradeSliderProps = {
	className?: string;
};

function useTranslatedStrings() {
	const translate = useTranslate();
	const limits = translate( 'Monthly site views limit', {
		comment: 'Heading for Stats Upgrade slider. The monthly views limit.',
	} );
	const price = translate( 'You will pay', {
		comment: 'Heading for Stats Upgrade slider. The monthly price.',
	} );
	const strategy = translate( 'Price per month, billed yearly', {
		comment: 'Stats Upgrade slider message. The billing strategy.',
	} );

	return {
		limits,
		price,
		strategy,
	};
}

function TierUpgradeSlider( { className }: TierUpgradeSliderProps ) {
	const componentClassNames = classNames( 'stats-tier-upgrade-slider', className );

	// Get the plan details.
	const plans = useAvailableUpgradeTiers();

	// Slider state.
	const [ currentPlanIndex, setCurrentPlanIndex ] = useState( 0 );
	const sliderMin = 0;
	const sliderMax = plans.length - 1;

	const handleSliderChange = ( value: number ) => {
		setCurrentPlanIndex( value );
	};

	const translatedStrings = useTranslatedStrings();

	return (
		<div className={ componentClassNames }>
			<div className="stats-tier-upgrade-slider__plan-callouts">
				<div className="stats-tier-upgrade-slider__plan-callout">
					<h2>{ translatedStrings.limits }</h2>
					<p>{ plans[ currentPlanIndex ].views }</p>
				</div>
				<div className="stats-tier-upgrade-slider__plan-callout right-aligned">
					<h2>{ translatedStrings.price }</h2>
					<p>{ plans[ currentPlanIndex ].price }</p>
				</div>
			</div>
			<PricingSlider
				className="stats-tier-upgrade-slider__slider"
				thumbClassName="stats-tier-upgrade-slider__thumb"
				value={ currentPlanIndex }
				minValue={ sliderMin }
				maxValue={ sliderMax }
				onChange={ handleSliderChange }
				marks
			/>
			<p className="stats-tier-upgrade-slider__info-message">{ translatedStrings.strategy }</p>
		</div>
	);
}

export default TierUpgradeSlider;
