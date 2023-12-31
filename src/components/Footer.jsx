import { Container, Row, Col } from 'reactstrap';
import googleIcon from '../assets/google.png';
import appStoreIcon from '../assets/appStore.png';
import '../styles/footer.css';
const Footer = () => {
  return (
    <footer className='footer bg-black '>
      <Container>
        <Row>
          <Col className='text-center my-4 col-7'>
            <h2>FOUR GUYS</h2>
            <a className='btn btn-social-icon btn-instagram mx-1' href='https://www.instagram.com/fiveguys/?hl=en'>
              <i className='fa fa-instagram' />
            </a>
            <a className='btn btn-social-icon btn-facebook  mx-1' href='https://www.facebook.com/fiveguys/'>
              <i className='fa fa-facebook' />
            </a>
            <a className='btn btn-social-icon btn-twitter mx-1' href='https://twitter.com/FiveGuys'>
              <i className='fa fa-twitter' />
            </a>
            <a
              className='btn btn-social-icon btn-google mx-1'
              href='https://www.youtube.com/channel/UCnPsCURqHlcoRt-Vr7nEaEg'
            >
              <i className='fa fa-youtube' />
            </a>
          </Col>
          <Col className='my-4 col-5'>
            <a
              href='https://play.google.com/store/apps/details?id=com.fiveguys.olo.android&hl=en_US&pli=1'
              className='apps-links'
            >
              <img id='google-app' src={googleIcon} alt='google icon' />
            </a>

            <a href='https://apps.apple.com/us/app/five-guys-burgers-fries/id457494327' className='apps-links'>
              <img id='appStore-app' src={appStoreIcon} alt='app store icon' />
            </a>
          </Col>
        </Row>
      </Container>
      <h6 className='bottom-footer mb-0'>
        Made with <span id='heart'>&#x1F49A;</span> by Pedro Ramirez
      </h6>
    </footer>
  );
};

export default Footer;
