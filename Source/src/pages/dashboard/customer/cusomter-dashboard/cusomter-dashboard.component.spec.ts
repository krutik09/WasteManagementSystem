import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusomterDashboardComponent } from './cusomter-dashboard.component';

describe('CusomterDashboardComponent', () => {
  let component: CusomterDashboardComponent;
  let fixture: ComponentFixture<CusomterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusomterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusomterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
