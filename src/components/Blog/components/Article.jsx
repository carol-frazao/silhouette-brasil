import styled from "styled-components"

const Artigo = ({img, alt, title, description}) => {
  return (
    <Article className="Article">
      <Img src={img} alt={alt} />
      <LinkArtigo href="/"> {title} </LinkArtigo>
      <Span> {description} </Span>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 250px;
  background: transparent;
  padding: 10px;
`
const Img = styled.img`
  width: 100%;
`
const LinkArtigo = styled.a`
  color: white;
  font-weight: 500;
  font-size: 16px;
`
const Span = styled.span`
  color: white;
  font-size: 14px;
  font-weight: lighter;
  text-align: justify;
`


export default Artigo