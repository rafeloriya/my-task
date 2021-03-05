import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  panelOpenState = false;
public slideIndex = 1;
  
  ngOnInit(): void {
    this.showSlides(this.slideIndex)
    this.imgSlides(this.slideIndex)
  }
  title = 'my-task';


  plusSlides(n: any) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: any) {
    this.showSlides(this.slideIndex = n);
  }
  pluSlides(n:any) {
   this. showSlides(this.slideIndex += n);
  }
  
   currSlide(n:any) {
    this.showSlides(this.slideIndex = n);
  }
  

showSlides(n: any) {
  
  var i;
  let slides: any = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { this.slideIndex = 1 }
  if (n < 1) { this.slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block"
  dots[this.slideIndex - 1].className += " active";
}
 imgSlides(n:any) {
  var i;
  let slides: any = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { this.slideIndex = 1 }   
  if (n < 1) { this.slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block";  
  dots[this.slideIndex-1].className += " active";
}
}

