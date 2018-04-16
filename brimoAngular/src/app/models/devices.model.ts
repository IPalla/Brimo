interface DeviceIf {
  id: number;
  name: string;
  freq: number;
  info: string;
  commands: string;
  location: string;
  lastupdate: string;
  camera: boolean;
  ip: string;
}

export class Device implements DeviceIf {
  constructor(public id: number, public name: string, public freq: number,
    public info: string, public commands: string, public location: string, public lastupdate: string,
    public camera: boolean, public ip: string) {}
    getStatus() {
      return true;
    }
}
export class DeviceEdit {
  constructor( public new_name: string, public new_location: string) {}
}
