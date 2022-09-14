import './App.css';
import Header from './components/header';
import InfoSection from './components/infoSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from './banner.png'

function App() {
  return (
    <div className="App">
      <header className="App-header p-5">
        <Header></Header>

        <img src={banner} alt='Movie Theater Banner' width='100%' />

        <Container fluid className='p-5'>
          <Row className='bg-primary p-5'>
            <Col className='bg-dark p-3'>
              <InfoSection
                title='Step 1'
                text='Purchase your movie ticket from our application (coming soon!)'
              />
            </Col>
            <Col className='bg-dark p-3'>
              <InfoSection
                title='Step 2'
                text='Set up your streaming device or at-home theater'
              />
            </Col>
            <Col className='bg-dark p-3'>
              <InfoSection
                title='Step 3'
                text='Invite your friends and enjoy your at-home theater experience!'
              />
            </Col>
          </Row>
        </Container>

      </header>
      <p>Interested? Contact us here:</p>
      <p>ezrafrost7@gmail.com</p>
    </div>
  );
}

export default App;
