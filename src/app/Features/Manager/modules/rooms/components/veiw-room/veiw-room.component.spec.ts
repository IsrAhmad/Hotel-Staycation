import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwRoomComponent } from './veiw-room.component';

describe('VeiwRoomComponent', () => {
  let component: VeiwRoomComponent;
  let fixture: ComponentFixture<VeiwRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwRoomComponent]
    });
    fixture = TestBed.createComponent(VeiwRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
