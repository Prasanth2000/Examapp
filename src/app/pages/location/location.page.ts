import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

locations = [{
  name: "mpm exam centre",
  location: "kuala lumpur",
  map:"https://www.google.com/maps/uv?pb=!1s0x31cc47c7f3f576a5%3A0x244584dae920c5ae!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPgt2T5bQhGSvEa1ERJxRCX78prAsDj8ck6smIS%3Dw475-h220-k-no!5smpm%20exam%20location%20kuala%20lumpur%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPgt2T5bQhGSvEa1ERJxRCX78prAsDj8ck6smIS&hl=en&sa=X&ved=2ahUKEwi80N_is-H2AhXt4jgGHRPaD9YQoip6BAgrEAM",
  image:"assets/icon/Hall1.jpg"
},
{ name: "university malaya exam centre",
  location: "kuala lumpur",
  map: "https://www.google.com/maps/place/Exam+Hall,+Malaya+Univeristy,+Kuala+Lumpur/@3.115371,101.65887,15z/data=!4m5!3m4!1s0x0:0x6a4ea6be18d187c9!8m2!3d3.115371!4d101.65887",
  image: "assets/icon/Hall2.jpg"
},
{
  name: "taruc exam centre",
  location: "putrajaya",
  map: "https://www.google.com/maps/place/Main+Hall,+TARUC/@3.2164777,101.7271964,17.26z/data=!4m5!3m4!1s0x0:0xfebc5a5a82d3c9f6!8m2!3d3.2164284!4d101.7295213",
  image: "assets/icon/Hall3.jpg"
},
{
  name: "tan sri othman hall",
  location: "subang jaya",
  map: "https://www.google.com/maps/place/Tan+Sri+Othman+Hall+(Dewan+TSO)/@6.4653842,100.5017615,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe65be81dda0f9449!8m2!3d6.4654124!4d100.5039493",
  image: "assets/icon/Hall4.jpg"
}]

search = ""

location = []

  constructor() { }

links(url){
  window.open(url)
}


filter(){
  if (this.search != ""){
   this.location = this.locations.filter(place =>place.name.includes(this.search.toLowerCase()) || place.location.includes(this.search.toLowerCase()))
  }

  else{
    this.location = this.locations
  }
}
  ngOnInit() {
    this.filter()
  }

}
