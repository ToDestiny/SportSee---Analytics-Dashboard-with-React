import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { fetchUserPerformance } from '../../api/api';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: #282d30;
  border-radius: 10px;
`;

function GraphHexa() {
  let { id } = useParams;
  if (id === undefined) id = 12;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  async function fetchData(id) {
    const data = await fetchUserPerformance(id);
    setInfo(data);
  }
  if (info.length === 0) return <></>;
  console.log(info.data);

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={info.data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            fontSize={14}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default GraphHexa;