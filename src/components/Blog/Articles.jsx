import Artigo from "./components/Article";

const Articles = () => {
  return (
    <section className="Articles">
      <Artigo
        img="/images/guia-silhouettes.jpg"
        title="Diferenças entre as silhouettes Cameo x Curio x Portrait"
        description="Entenda todas as diferenças entre as silhouettes e descubra qual a melhor para o seu negócio."
      />

      <Artigo
        img="/images/convites.png"
        title="Como montar convites de aniversário infantil"
        description="Ideias para criar os seus próprios convites e vender muito. Confira dicas e as diversas opções de produção de convites infantis."
      />

      <Artigo
        img="/images/ebook.png"
        title="E-book: Silhouette & Mercado de Festas"
        description="Saiba como iniciar  um negócio de Papelaria Personalizada para festas. Todas as dicas que você precisava."
      />
    </section>
  )
}

export default Articles