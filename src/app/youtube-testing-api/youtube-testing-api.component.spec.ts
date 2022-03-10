import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeTestingApiComponent } from './youtube-testing-api.component';

describe('YoutubeTestingApiComponent', () => {
  let component: YoutubeTestingApiComponent;
  let fixture: ComponentFixture<YoutubeTestingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeTestingApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeTestingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
