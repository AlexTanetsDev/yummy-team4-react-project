import { ReactComponent as Facebook } from '../../images/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../images/icons/instagram.svg';

import {
  SocialContainer,
  Title,
  SocLinkList,
  SocLinkItem,
} from './FollowUs.styled';

export const FollowUs = () => {
  return (
    <SocialContainer>
      <Title>Folow us</Title>
      <SocLinkList>
        <SocLinkItem>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        </SocLinkItem>
        <SocLinkItem>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
          </a>
        </SocLinkItem>
        <SocLinkItem>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </SocLinkItem>
        <SocLinkItem>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </SocLinkItem>
      </SocLinkList>
    </SocialContainer>
  );
};
