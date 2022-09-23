import styled from 'styled-components';
import Header from '../components/Header/Header';
import LeftBar from '../components/LeftBar/LeftBar';
import MainDashboard from '../components/MainDashboard/MainDashboard';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

/**
 * Home Page coming from /user/:id from React Router
 * @component
 */

function Dashboard() {
  return (
    <Home>
      <Header />
      <LeftBar />
      <MainDashboard />
    </Home>
  );
}

export default Dashboard;
