import { Component } from '@angular/core';

interface IMenu {
  text:string ,
  icon:string ,
  link:string,
  
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  toggle:boolean = false;
   // then use role in menu conditions 
   menu:IMenu[] = [
    {
      text:'Home',
      icon:'fa fa-home' ,
      link:'/manager/home',
     
    },
    {
      text:'Users',
      icon:'fa-solid fa-user-group' ,
      link:'/manager/users',
   
    },
    {
      text:'Rooms',
      icon:"fa-solid fa-table-cells-large",
      link:'/manager/rooms',
     
    },
    {
      text:'Ads',
      icon:'fa-regular fa-calendar-days' ,
      link:'/manager/ads',
     
    },
    {
      text:'Bookings Facilities',
      icon:'fa-solid fa-user-group' ,
      link:'/manager/facilities',
     
    },
    
   

   ]
}
