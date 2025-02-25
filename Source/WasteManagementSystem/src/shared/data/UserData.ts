import { User } from "../models/User";
import { UserType } from "../models/UserType";
import { signal } from '@angular/core';
export const ExistingUserDataList =  signal<User[]>([
    {
      Id: 1,
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin',
      userRole: UserType.Admin
    },
    {
      Id: 2,
      username: 'customer1',
      email: 'customer1@example.com',
      password: 'customer1',
      userRole: UserType.Customer
    },
    {
      Id: 3,
      username: 'customer2',
      email: 'customer2@example.com',
      password: 'customer2',
      userRole: UserType.Customer
    },
    {
      Id: 4,
      username: 'customer4',
      email: 'customer4@example.com',
      password: 'customer4',
      userRole: UserType.Customer
    },
    {
      Id: 5,
      username: 'driver1',
      email: 'driver1@example.com',
      password: 'driver1',
      userRole: UserType.Driver
    },
    {
      Id: 6,
      username: 'driver2',
      email: 'driver2@example.com',
      password: 'driver2',
      userRole: UserType.Driver
    },
    {
      Id: 7,
      username: 'driver3',
      email: 'driver3@example.com',
      password: 'driver3',
      userRole: UserType.Driver
    },
  ]);
