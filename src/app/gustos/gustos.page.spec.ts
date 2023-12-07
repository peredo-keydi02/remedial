import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GustosPage } from './gustos.page';

describe('GustosPage', () => {
  let component: GustosPage;
  let fixture: ComponentFixture<GustosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GustosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
