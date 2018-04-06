interface DeviceIf {
  id: number;
  name: string;
  freq: number;
  info: string;
  location: string;
  lastupdate: string;
}

export class Device implements DeviceIf {
  constructor(public id: number, public name: string, public freq: number,
    public info: string, public location: string, public lastupdate: string) {}
    getStatus() {
      return true;
    }
}
export class DeviceEdit {
  constructor( public new_name: string, public new_location: string) {}
}
