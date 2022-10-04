import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import GraphsContainer from './GraphContainer';
import TitleDashboard from './TitleDashboard';
import Error from '../../pages/Error';
import { fetchUserInfo } from '../../api/api';
import { useParams } from 'react-router-dom';

const MainDashboardContainer = styled.div`
  position: absolute;
  height: 1024px;
  width: 780px;
  top: 4em;
  left: 5rem;
  right: 5rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
`;

/**
 * Main Dashboard container
 * Shows Error if an API error occurs
 * @component
 */

function MainDashboard() {
  const [userInfo, setUserInfo] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  let error = false;
  let { id } = useParams();

  if (id === undefined) id = 12;

  useEffect(() => {
    setDataLoading(true);
    fetchData(id);
    setDataLoading(false);
  }, [id]);

  async function fetchData(id) {
    const userInfo = await fetchUserInfo(id);
    setUserInfo(userInfo);
  }
  if (userInfo?.id === undefined) error = true;
  else error = false;

  if (isDataLoading) return <div>Loading ...</div>;
  else
    return error ? (
      <Error />
    ) : (
      <MainDashboardContainer>
        <TitleDashboard userName={userInfo.userInfos?.firstName} />
        <GraphsContainer />
      </MainDashboardContainer>
    );
}

export default MainDashboard;
