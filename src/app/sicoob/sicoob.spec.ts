import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sicoob } from './sicoob';

describe('Sicoob', () => {
  let component: Sicoob;
  let fixture: ComponentFixture<Sicoob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sicoob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sicoob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
