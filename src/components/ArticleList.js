import Article from "./Article.js";

function ArticleList({ posts }) {

  const postElementsArr = posts.map(singleBlogPost => {
    return <Article key={singleBlogPost.id} title={singleBlogPost.title} date={singleBlogPost.date} preview={singleBlogPost.preview} />;
  });

  return (
    <main>
      {postElementsArr}
    </main>
  );
}

export default ArticleList;