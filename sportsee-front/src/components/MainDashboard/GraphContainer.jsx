import React from 'react';
import styled from 'styled-components';
import GraphActivity from './GraphActivity';
import GraphHexa from './GraphHexa';
import GraphRight from './GraphRight';
import GraphScore from './GraphScore';
import GraphSession from './GraphSessions';

const Container = styled.div`
  height: 50em;
  width: 100%;
  font-weight: 500;
  margin: 4rem 0rem 0rem 4rem;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const LeftBottom = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 4em;
  justify-content: space-between;
`;

function GraphsContainer({ data }) {
  return (
    <Container>
      <Left>
        <GraphActivity />
        <LeftBottom>
          <GraphSession />
          <GraphHexa />
          <GraphScore todayScore={data.todayScore} />
        </LeftBottom>
      </Left>
      <GraphRight keyData={data.keyData} />
    </Container>
  );
}

export default GraphsContainer;
