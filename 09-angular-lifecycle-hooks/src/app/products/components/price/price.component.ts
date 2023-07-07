import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input()
  public price:number = 0;

  ngOnInit(): void {
    console.log('CHILD component: ngOnInit');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD component: ngOnChanges');
    console.log({changes});
    
  }
  ngOnDestroy(): void {
    console.log('CHILD component: ngOnDestroy');
  }

}
