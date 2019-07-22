const
  isSmartphone = require('../utilities/isSmartphone'),
  OPTIONS = {
    userAgent: true,
    displayWidth: true,
    displayWidthSP: 768
  };

export default class UserAgent {
  constructor() {
    this.device = null;
    this.ww = null;
    this.wh = null;
    this.sp = isSmartphone();
    this.pc = false;

    this.set();
  }

  set() {
    this.changeDeviceInfo();
    this.pc = this.isPC();
    this.sp = this.isSP();
  }

  changeDeviceInfo() {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;
    if(OPTIONS.userAgent && OPTIONS.displayWidth) {
      if (!this.sp && OPTIONS.displayWidthSP < this.ww) {
        this.device = "pc";
      } else {
        this.device = "sp";
      }
    } else if (OPTIONS.userAgent) {
      if (!this.sp) {
        this.device = "pc";
      } else {
        this.device = "sp";
      }
    } else if (OPTIONS.displayWidth) {
      if (OPTIONS.displayWidthSP < this.ww) {
        this.device = "pc";
      } else {
        this.device = "sp";
      }
    }
  }
  isPC() {
    return (this.device == "pc");
  }
  isSP() {
    return (this.device == "sp");
  }

  resize() {
    this.set();
  }
}
