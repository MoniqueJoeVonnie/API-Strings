const postlistEl = document.querySelector('.post-list');
async function main() {
   const id = localStorage.getItem("id100");
   const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
   const postData = await posts.json();

   console.log(postData);

   postListEl.innerHTML = postsData.map(post => `
 <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
    `).join('');
}

main();