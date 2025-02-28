import { signal } from "@angular/core";
import { Order } from "../models/Order";
import { WasteType } from "../models/WasteType";
import { Status } from "../models/status";
import { ExistingUserDataList } from "./UserData";

export const ExistingOrdersData = signal<Order[]>([
  {
    orderId: 1,
    wasteType: WasteType.Solid,
    wasteAmount: 40,
    customer: ExistingUserDataList().find(user => user.username === 'customer1')!,
    orderDate: '2024-02-20T10:00:00Z',
    status: Status.Pending
  },
  {
    orderId: 2,
    wasteType: WasteType.Liquid,
    wasteAmount: 60,
    customer: ExistingUserDataList().find(user => user.username === 'customer2')!,
    orderDate: '2024-02-21T12:30:00Z',
    status: Status.Pending
  },
  {
    orderId: 3,
    wasteType: WasteType.Organic,
    wasteAmount: 35,
    customer: ExistingUserDataList().find(user => user.username === 'customer4')!,
    driver: ExistingUserDataList().find(user => user.username === 'driver3'),
    orderDate: '2024-02-22T09:15:00Z',
    status: Status.Completed
  },
  {
    orderId: 4,
    wasteType: WasteType.Organic,
    wasteAmount: 50,
    customer: ExistingUserDataList().find(user => user.username === 'customer1')!,
    orderDate: '2024-02-23T11:45:00Z',
    status: Status.Pending
  },
  {
    orderId: 5,
    wasteType: WasteType.Liquid,
    wasteAmount: 70,
    customer: ExistingUserDataList().find(user => user.username === 'customer2')!,
    driver: ExistingUserDataList().find(user => user.username === 'driver1'),
    orderDate: '2024-02-24T14:00:00Z',
    status: Status.Assigned
  },
  {
    orderId: 6,
    wasteType: WasteType.Hazardous,
    wasteAmount: 25,
    customer: ExistingUserDataList().find(user => user.username === 'customer4')!,
    driver: ExistingUserDataList().find(user => user.username === 'driver3'),
    orderDate: '2024-02-25T16:20:00Z',
    status: Status.Completed
  },
  {
    orderId: 7,
    wasteType: WasteType.Hazardous,
    wasteAmount: 55,
    customer: ExistingUserDataList().find(user => user.username === 'customer1')!,
    orderDate: '2024-02-26T08:30:00Z',
    status: Status.Pending
  },
  {
    orderId: 8,
    wasteType: WasteType.Solid,
    wasteAmount: 45,
    customer: ExistingUserDataList().find(user => user.username === 'customer2')!,
    driver: ExistingUserDataList().find(user => user.username === 'driver2'),
    orderDate: '2024-02-27T18:00:00Z',
    status: Status.Completed
  },
  {
    orderId: 9,
    wasteType: WasteType.Solid,
    wasteAmount: 38,
    customer: ExistingUserDataList().find(user => user.username === 'customer4')!,
    driver: ExistingUserDataList().find(user => user.username === 'driver1'),
    orderDate: '2024-02-28T13:40:00Z',
    status: Status.Completed
  },
  {
    orderId: 10,
    wasteType: WasteType.Organic,
    wasteAmount: 65,
    customer: ExistingUserDataList().find(user => user.username === 'customer1')!,
    driver: ExistingUserDataList().find(user => user.username === 'driver2'),
    orderDate: '2024-02-29T17:50:00Z',
    status: Status.Assigned
  }
]);
