import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterContainer,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData1 , footerSocialData2 , footerSocialData3 } from '../../Data/FooterData';
import { Row, Section } from '../../Styleall';

function Footer() {
	return (
		<FooterContainer padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/logo2.png" />
							Secure
						</FooterLogo>
						<FooterAddress>
							69 Street, Delta Building, US Road, Los Angeles 123
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData1.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="https://www.facebook.com/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
							   {footerSocialData2.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="https://twitter.com/home"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
									))}

								{footerSocialData3.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="https://www.linkedin.com/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>Eman Mohamed © 2022</FooterRights>
			</FooterWrapper>
		</FooterContainer>
	);
}

export default Footer;