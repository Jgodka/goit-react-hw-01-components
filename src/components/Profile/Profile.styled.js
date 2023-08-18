import styled from 'styled-components';
export const ProfileWrapper = styled.div`
  background-color: #f0d8d8;
  width: 500px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.img`
  display: block;
  width: 250px;
  border: 1px solid black;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
`;
export const Tag = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0;
`;
export const Location = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0;
`;
export const Stats = styled.ul`
  display: flex;
  border-top-width: 3px;
  border-top-style: solid;
  border-top-color: #8c2e2e;
  margin-top: 30px;
  padding: 0;
`;
export const StatsSubtitle = styled.li`
  width: 100%;
  height: 100%;
  border: 3px solid #8c2e2e;
  margin: 0;
`;
export const Label = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Quantity = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;
