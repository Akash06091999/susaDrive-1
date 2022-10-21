import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfolderComponent } from './viewfolder.component';

describe('ViewfolderComponent', () => {
  let component: ViewfolderComponent;
  let fixture: ComponentFixture<ViewfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
