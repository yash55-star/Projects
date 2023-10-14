import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeBookComponent } from './reciepe-book.component';

describe('ReciepeBookComponent', () => {
  let component: ReciepeBookComponent;
  let fixture: ComponentFixture<ReciepeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciepeBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciepeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
