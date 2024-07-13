document.addEventListener('DOMContentLoaded', function() {//wait 
  const userinputElement = document.querySelector('.username-input');
  const titleinputElement = document.querySelector('.title-input');
  const contentinputElement = document.querySelector('.content-input');
  const submitElement = document.querySelector('.submit-button');
 
  submitElement.addEventListener('click', function() {
   const userinputValue = userinputElement.value;
   const titleinputValue = titleinputElement.value;
   const contentinputValue = contentinputElement.value;

   const blogEntry = {
    userinputValue,
    titleinputValue,
    contentinputValue
   };
 
   console.log(userinputValue);
   console.log(titleinputValue);
   console.log(contentinputValue);

   // if anything to the left is false or null/ doesn't exist. 
   const blogs = JSON.parse(localStorage.getItem('blogEntries')) || [];


   blogs.push(blogEntry);

   localStorage.setItem('blogEntries', JSON.stringify(blogs));
  
   window.location.href='blog.html';

  });
});
//Dark mode Button
let isDark = true;


const darkmodeButton = $('.dark-mode')

darkmodeButton.on('click', function () {
  if (isDark) {
   $('body').css({ 'background-color': 'white', color: 'black' });
     isDark = !isDark;  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
 }
 });



