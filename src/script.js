/*-------To display about section default--------*/
document.addEventListener('DOMContentLoaded', () => {
  aboutButton.click();
})

/*--------------Event listener for adding images------------*/
document.addEventListener('DOMContentLoaded', () => {

  const addImageButton = document.getElementById('addImageButton');
  const imagesDiv = document.getElementById('imagesDiv');
  
  addImageButton.addEventListener('click', () => {
    const imageUrl = prompt('Enter the URL of the image:');
      
    if (imageUrl) {
      const newImage = document.createElement('img');
      newImage.src = imageUrl;
      newImage.alt = 'Gallery Image';
      newImage.className = 'rounded-lg w-56 object-cover';
      imagesDiv.appendChild(newImage);
    }
  });
  aboutButton.click();
});
  
const contentArticle = document.getElementById("content");

/*-----------Event listener for about button--------*/
const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", function(){
  contentArticle.innerHTML = "";
  const aboutContent = document.createElement("p");
  aboutContent.innerHTML = `Hello, I'm pranay kumar, As a passionate Front-End Developer, I specialize in creating visually compelling and highly interactive web experiences. I have a proven track record of building responsive, user-friendly websites that deliver exceptional user experiences. I have honed my skills in HTML, CSS, JavaScript, and React.js through various projects, including the development of a weather forecast application. This project involved integrating multiple APls to fetch and display real-time weather data, as well as implementing responsive design principles using Tailwind CSS. Additionally, I have worked on a student registration system, where I applied my knowledge of local storage for data persistence and front-end development. In addition to my technical skills, I am proficient in using version control systems like Git and GitHub, which I have consistently utilized to manage project collaboration and maintain code integrity.`;
  contentArticle.appendChild(aboutContent);

  document.getElementById("img1").src = "images/ProjectImg-1.png";
  document.getElementById("img2").src = "images/projectImg-2.png";
  document.getElementById("img3").src = "images/projectImg-3.png";
});

/*-----------Event listener for experience button--------*/
const expButton = document.getElementById("expButton");
expButton.addEventListener("click", function(){
  contentArticle.innerHTML = '';
  const expContent = document.createElement("p");
  expContent.innerHTML = `<span>Below are some of the certifications, I have earned:</span>
   <ol type="1">
   <li><b>Certificate in Designing Web Pages Using HTML and CSS:</b> This course focused on building web pages using semantic HTML and advanced CSS techniques for responsive design, ensuring accessible and user-friendly web experiences.</li>
   <li><b>Certificate in Version Control with Git and GitHub: </b>This certification covers version control concepts, branch management, and collaboration using Git and GitHub, enabling effective project tracking and collaboration.</li>
   <li><b>Certificate in Developing Interactive Webpages Using JavaScript: </b>A comprehensive training on JavaScript, focusing on DOM manipulation, event handling, and creating interactive web components.</li>
   </ol>`;
  contentArticle.appendChild(expContent);

  document.getElementById("img1").src = "images/certificate-1.png";
  document.getElementById("img2").src = "images/certificate-2.png";
  document.getElementById("img3").src = "images/certificate-3.png";
});

/*-----------Event listener for recommend button--------*/
const recomendButton = document.getElementById("recButton");
recomendButton.addEventListener("click", function(){
  contentArticle.innerHTML = '';

  const recomendContent = document.createElement("p");
  recomendContent.innerHTML = `Through my Internshala trainings, I have developed strong skills in web development technologies such as HTML, CSS, JavaScript, and version control (Git and GitHub). I am committed to building user-friendly and efficient websites. 
  During my self-paced training on Internshala, I consistently stayed motivated to complete challenging tasks and projects. / have a passion for learning new technologies and improving my skills continuously.
  I take pride in producing clean and well-structured code, paying attention to the small details that ensure a polished user experience. Whether it's optimizing for responsiveness or improving accessibility, I strive for excellence in every aspect.`;

  contentArticle.appendChild(recomendContent);
  document.getElementById("img1").src = "images/internshala-1.png";
  document.getElementById("img2").src = "images/internshala-2.png";
  document.getElementById("img3").src = "images/internshala-3.png";
});

/*----To display underline for clicked button------*/
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    tabs.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});