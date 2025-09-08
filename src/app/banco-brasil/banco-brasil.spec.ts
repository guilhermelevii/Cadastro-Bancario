import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoBrasil } from './banco-brasil';

describe('BancoBrasil', () => {
  let component: BancoBrasil;
  let fixture: ComponentFixture<BancoBrasil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BancoBrasil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoBrasil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
