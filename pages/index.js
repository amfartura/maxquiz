import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/Components/Widget'

import QuizBackground from '../src/Components/QuizBackground'
import Footer from '../src/Components/Footer'
import GitHubCorner from '../src/Components/GitHubCorner'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/* const BackgroundImage = styled.div `
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;

`; */

export const QuizContainer = styled.div `
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <Widget>
        {/* Título */}
        <Widget.Header>
          <h1>Quiz das Princesas</h1>
        </Widget.Header>
        {/* Conteúdo */}
        <Widget.Content>  
          
          <p>Você sabe tudo sobre as princesas da Disney?</p>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <h1>Quiz das amigas</h1>
          
          <p>Qual quiz você quer fazer</p>
        </Widget.Content>

       
      </Widget>
      <Footer />
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/amfartura"/>
  </QuizBackground>
  )
}
