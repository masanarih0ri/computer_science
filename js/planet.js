class Planet {
  constantOfGravitation = 6.67438 * Math.pow(10, -11);
  speedOfLight = 2.99792458 * Math.pow(10, 8);
  massOfSun = 1.989 * Math.pow(10, 30);
  radiusOfSun = 6.96 * Math.pow(10, 5);
  oneYear = 31556926;
  
  constructor(name, massKg, meanRadiusKm, distanceToStarLs) {
    this.name = name;
    this.massKg = massKg;
    this.meanRadiusKm = meanRadiusKm;
    this.distanceToStarLs = distanceToStarLs;
  }
  
  getVolume() {
    return (4 / 3) * (Math.PI * Math.pow(this.meanRadiusKm, 3));
  }
  
  getSurfaceArea() {
    return 4 * Math.PI * Math.pow(this.meanRadiusKm, 2);
  }
  
  compareToPlanet() {
    return Math.abs((4 / 3) * (Math.PI * Math.pow(this.radiusOfSun, 3)) - this.getVolume());
  }
  
  getSurfaceGravity() {
    // NOTE 最後のMath.pow(1000, 2)はkmからmに単位を直すためのもの
    return this.massKg * this.constantOfGravitation / Math.pow(this.meanRadiusKm, 2) / Math.pow(10, 6);
  }
  
  getDistanceToStarKm() {
    return this.speedOfLight * this.distanceToStarLs / Math.pow(10, 3);
  }

  getOrbitalSpeed() {
    return Math.sqrt((this.massOfSun * this.constantOfGravitation) / (this.getDistanceToStarKm() * Math.pow(10, 3)));
  }
  
  getOrbitalPeriodYear() {
    return (2 * Math.PI * this.getDistanceToStarKm() * Math.pow(10, 3)) / this.getOrbitalSpeed() / (86400 * 365);
  }

}

let earth = new Planet("Earth", 5.974e24, 6.3782e3, 4.990e2);
console.log(earth.getVolume())
console.log(earth.getSurfaceArea());
console.log(earth.compareToPlanet());
console.log(earth.getSurfaceGravity());
console.log(earth.getDistanceToStarKm());
console.log(earth.getOrbitalSpeed());
console.log(earth.getOrbitalPeriodYear());