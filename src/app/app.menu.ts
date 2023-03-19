import { MenuItem } from "src/spa/service/menu.service";

export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Cars',
    icon: '../../assets/img/car.png',
    route: null,
    submenu: [
      {
        text: 'Select',
        icon: '../../assets/img/car.png',
        route: null,
        submenu: [
          {
            text: 'Ferrari',
            icon: '../../assets/img/car.png',
            route: '/authenticated/car-detail/Ferrari',
            submenu: null
          },
          {
            text: 'Bugatti',
            icon: '../../assets/img/car.png',
            route: '/authenticated/car-detail/Bugatti',
            submenu: null
          },
          {
            text: 'Lamborghini',
            icon: '../../assets/img/car.png',
            route: '/authenticated/car-detail/Lamborghini',
            submenu: null
          },
          {
            text: 'Maserati',
            icon: '../../assets/img/car.png',
            route: '/authenticated/car-detail/Maserati',
            submenu: null
          }]
      },
      {
        text: 'Price top',
        icon: '../../assets/img/car.png',
        route: '/authenticated/car-list/1',
        submenu: null
      },
      {
        text: 'Top 3',
        icon: '../../assets/img/car.png',
        route: '/authenticated/car-list/3',
        submenu: null
      },
      {
        text: 'Top 5',
        icon: '../../assets/img/car.png',
        route: '/authenticated/car-list/5',
        submenu: null
      }]
  },
  {
    text: 'Maintenance',
    icon: '../../assets/img/settings.png',
    route: null,
    submenu: [
      {
        text: 'Car maintenance',
        icon: '../../assets/img/settings.png',
        route: '/authenticated/car-maintenance',
        submenu: null
      },
      {
        text: 'Settings',
        icon: '../../assets/img/settings.png',
        route: '/authenticated/settings',
        submenu: null
      }]
  },
  {
    text: 'Home',
    icon: '../../assets/img/home.png',
    route: '/authenticated/home',
    submenu: null
  }]



