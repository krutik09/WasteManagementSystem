import { UserModel } from "../models/UserMode";
import { UserType } from "../models/UserType";

export const ExistingUserDataList: UserModel[] = [
    {
      Id: 1,
      username: 'test',
      email: 'john.doe@example.com',
      password: 'test',
      userRole: UserType.Admin
    },
    {
      Id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      password: 'securePass456',
      userRole: UserType.Customer
    },
    {
      Id: 3,
      username: 'michael_jordan',
      email: 'michael.jordan@example.com',
      password: 'goat1234',
      userRole: UserType.Driver
    },
  ];
