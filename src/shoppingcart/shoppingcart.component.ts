import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'shoppingcart-main',
    templateUrl: 'shoppingcart.component.html'
})

export class ShoppingCartComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        // When the user scrolls the page, execute myFunction 
        window.onscroll = function () { addSticky() };

        // Get the navbar
        let navbar = document.getElementById("nav");

        // Get the offset position of the navbar
        let sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function addSticky() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
     }




}