import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiledCalculatorsComponent } from './tiled-calculators.component';

describe('TiledCalculatorsComponent', () => {
  let component: TiledCalculatorsComponent;
  let fixture: ComponentFixture<TiledCalculatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiledCalculatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiledCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
