// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.article .expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    this.dispose = this.domElement.querySelector('.article .dispose');
    this.dispose.textContent = 'Remove article from feed';
    this.dispose.addEventListener('click', () => this.eliminate());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains('article-open')) {
      TweenMax.fromTo((this.domElement), .7, {css:{height: "50px"}}, {css:{height: "400px"}});
      this.expandButton.textContent = 'Click to Close';
    } else {
      TweenMax.fromTo((this.domElement), .7, {css:{height: "400px"}}, {css:{height: "50px"}});
      this.expandButton.textContent = 'Click to Expand';

    }

  }

  eliminate() {
    TweenMax.to((this.domElement), .7, {css:{x: 400, opacity: "0", display: "none"}})

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articles = document.querySelectorAll('.articles .article')
articles.forEach(x => new Article(x));
