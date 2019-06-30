interface DeviceIf {
  device_id: number;
  name: string;
  freq: number;
  info: string;
  commands: [Command];
  room: Room;
  lastupdate: string;
  camera: boolean;
  IP: string;
  isOnline: boolean;
}

export class Device implements DeviceIf {
  constructor(public device_id: number, public name: string, public freq: number,
    public info: string, public commands: [Command], public room: Room, public lastupdate: string,
    public camera: boolean, public IP: string, public isOnline: boolean) {}
}
export class Command{
  constructor(public command_code: string, command_descr: string) {}
}
export class Room{
  constructor(public id: number, public descr: string, public room_id: number){}
}
export class DeviceEdit {
  constructor( public new_name: string, public new_location: string) {}
}
