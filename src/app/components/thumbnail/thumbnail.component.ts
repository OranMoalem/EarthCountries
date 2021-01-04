import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
    @Input()
    public imageSource :string;
    
    @Input()
    public imageWidth :number;

    @Input()
    public imageHeight :number;



}
