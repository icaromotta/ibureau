import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketCardComponent } from './stock-market-card.component';

describe('StockMarketCardComponent', () => {
  let component: StockMarketCardComponent;
  let fixture: ComponentFixture<StockMarketCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMarketCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
