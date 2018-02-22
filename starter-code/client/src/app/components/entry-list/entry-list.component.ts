import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Array<any>;

  constructor(private listingService: ListingService ) { }

  ngOnInit() {
    this.listingService.getList()
      .then((entries) => {
        this.entries = entries
      })
  }

}
