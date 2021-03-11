import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  slides = [
    {img: "assets/images/1.png",name:"FASHION"},
    {img: "assets/images/2.png",name:"BEAUTY"},
    {img: "assets/images/3.png",name:"GROCERY"},
    {img: "assets/images/4.png",name:"MEDICINE"},
    {img: "assets/images/5.png",name:"ELECTRONICS"},
    {img: "assets/images/2.png",name:"BEAUTY"},
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1};


  Offers  = [
    {img: "assets/images/offer-mobile.jpg",name:"FASHION"},
    {img: "assets/images/offer-mobile.jpg",name:"BEAUTY"},
    {img: "assets/images/offer-mobile.jpg",name:"GROCERY"},
    {img: "assets/images/offer-mobile.jpg",name:"MEDICINE"},
    {img: "assets/images/offer-mobile.jpg",name:"ELECTRONICS"},
    {img: "assets/images/offer-mobile.jpg",name:"BEAUTY"},
  ];
  OffersConfig = {"slidesToShow": 5, "slidesToScroll": 1};

  topSelling  = [
    {img: "assets/images/selling.png",name:"FASHION"},
    {img: "assets/images/selling.png",name:"BEAUTY"},
    {img: "assets/images/selling.png",name:"GROCERY"},
    {img: "assets/images/selling.png",name:"MEDICINE"},
    {img: "assets/images/selling.png",name:"ELECTRONICS"},
    {img: "assets/images/selling.png",name:"BEAUTY"},
  ];
  topSellingConfig = {"slidesToShow": 5, "slidesToScroll": 1};


  constructor() { }

  ngOnInit(): void {
  }

}
