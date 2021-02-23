import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${prop('size')};
  min-width: ${prop('size')};
  height: ${prop('size')};
  min-height: ${prop('size')};
  overflow: hidden;
  background-color: ${prop('color')};
  color: white;
  font-size: calc(${prop('size')} * 0.4);
  letter-spacing: 0.1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
