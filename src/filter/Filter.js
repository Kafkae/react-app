import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  max-width: 900px;
  height: 240px;
  margin: 80px auto;
  border: 3px solid #a82844;
  font-weight: bold;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

class Filter extends Component {
    render() {
      return (
        <Wrapper>
            <Title>Фильтры</Title>
        </Wrapper>
      );
    }
  }

  export default Filter