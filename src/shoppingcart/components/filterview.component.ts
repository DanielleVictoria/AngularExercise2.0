import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface FilterModel {
    category : string;
    pricerange : string;
    sort : string;
} 

@Component({
    selector: 'filterview',
    templateUrl: 'filterview.component.html'
})

export class FilterViewComponent implements OnInit {

    @Output()
    filter: EventEmitter<{ category: string, pricerange: string, sort: string }> = new EventEmitter();

    categories: string[] = ["None", "Healthcare", "Fashion", "Makeup", "Entertainment", "Lifestyle", "Fitness", "Others"];
    pricerange: string[] = ["None", "0-1000", "1000-5000", "5000-10000"];
    sort: string[] = ["Ascending", "Descending"];

    filterModel : FilterModel = {
        category: this.categories[0],
        pricerange: this.pricerange[0],
        sort: this.sort[0]
    }

    constructor() { }

    ngOnInit() {

    }

    onSubmit() {
        this.filter.emit (this.filterModel);
    }
}