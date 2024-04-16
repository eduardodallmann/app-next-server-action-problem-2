export enum PermissionsEnum {
  EDIT = 'EDIT',
  READ = 'READ',
  NOT = 'NOT',
}

export type Permissions = {
  admin: boolean;
  groups?: PermissionsEnum;
  events?: PermissionsEnum;
};

export type AllPermissions = keyof Omit<Permissions, 'admin'>;
