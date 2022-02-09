
// Fetches 5 posts
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(res => res.json())
  .then(data => {
    const postArr = data.slice(0, 5);
    html = "";
    for (let post of postArr) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `
    }

    document.getElementById('post-list').innerHTML = html;
  });