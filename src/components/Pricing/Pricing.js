import React from 'react';
import { Button } from '../../globalStyles';
import { GiSun } from 'react-icons/gi';
import { GiMoonOrbit,GiEarthAmerica } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './PricingElements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Donation Packs</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiEarthAmerica />
                </PricingCardIcon>
                <PricingCardPlan>Space Pebble</PricingCardPlan>
                <PricingCardCost>$19.99*</PricingCardCost>
                <PricingCardLength>*prices might vary</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1 Museum entry</PricingCardFeature>
                  <PricingCardFeature>1 Photo</PricingCardFeature>
                  <PricingCardFeature>2 Wallpapers</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiMoonOrbit />
                </PricingCardIcon>
                <PricingCardPlan>Moonsize</PricingCardPlan>
                <PricingCardCost>$49.99*</PricingCardCost>
                <PricingCardLength>*prices might vary</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>5 Museum entry</PricingCardFeature>
                  <PricingCardFeature>1 T-shirt</PricingCardFeature>
                  <PricingCardFeature>5 Wallpapers</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiSun />
                </PricingCardIcon>
                <PricingCardPlan>Celestial Sun</PricingCardPlan>
                <PricingCardCost>$199.99*</PricingCardCost>
                <PricingCardLength>*prices might vary</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Online Museum Virtual Tour</PricingCardFeature>
                  <PricingCardFeature>Elon's Musk autograph</PricingCardFeature>
                  <PricingCardFeature>Unlimited Wallpapers</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
