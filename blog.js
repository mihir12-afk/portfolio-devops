const blogContainer = document.getElementById('blog-posts');

fetch("https://gql.hashnode.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_TOKEN"  // Optional if public
  },
  body: JSON.stringify({
    query: `
      {
        user(username: "mihirsavla") {
          publications(first: 1) {
            edges {
              node {
                posts(first: 6) {
                  edges {
                    node {
                      title
                      brief
                      slug
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  })
})
.then(res => res.json())
.then(data => {
  const posts = data.data.user.publications.edges[0].node.posts.edges;

  posts.forEach(({ node: post }) => {
    const postCard = document.createElement('div');
    postCard.className = 'project-card';

    postCard.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.brief}</p>
      <div class="project-links">
        <a href="${post.url}" class="project-link" target="_blank">
          <i class="fas fa-book-open"></i> Read More
        </a>
      </div>
    `;

    blogContainer.appendChild(postCard);
  });
})
.catch(error => {
  blogContainer.innerHTML = `<p style="color:red;">Error loading blog posts.</p>`;
  console.error(error);
});
