interface DeviceIf {
  id: number;
  name: string;
  freq: number;
  info: string;
  command_list: [string];
  location: string;
  lastupdate: string;
  camera: boolean;
  IP: string;
}

export class Device implements DeviceIf {
  constructor(public id: number, public name: string, public freq: number,
    public info: string, public command_list: [string], public location: string, public lastupdate: string,
    public camera: boolean, public IP: string) {}
    getStatus() {
      return true;
    }
}
export class DeviceEdit {
  constructor( public new_name: string, public new_location: string) {}
}
