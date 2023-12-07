import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuerdosPage } from './recuerdos.page';

describe('RecuerdosPage', () => {
  let component: RecuerdosPage;
  let fixture: ComponentFixture<RecuerdosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuerdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
