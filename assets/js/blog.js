//renderblogList function that reads blogs from local storage and displays them
const blogs = JSON.parse(localStorage.getItem('blogEntries')) || [];

for (let blog of blogs){
  const blogWrapper = document.createElement('div');
  const title = document.createElement('h3');
  const content = document.createElement('p');
  const author = document.createElement('p');

  title.innerText = blog.titleinputValue;
  content.innerText = blog.contentinputValue;
  author.innerText = blog.userinputValue;

  blogWrapper.appendChild(title);
  blogWrapper.appendChild(content);
  blogWrapper.appendChild(author);

  document.getElementById('blogList').appendChild(blogWrapper);
  blogWrapper.classList.add('blogContainer');
}