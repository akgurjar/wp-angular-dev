import { Component, OnInit } from '@angular/core';
import { WPDialogRef } from '../../../projects/wp-angular/src//public_api';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(dialogRef: WPDialogRef) {
    console.log(dialogRef);
  }

  ngOnInit() {
  }

}
