class Planet {
  constantOfGravitation = 6.67438e-11; // 万有引力定数
  speedOfLight = 2.99792458e8; // 光速[m/s]
  massOfSun = 1.989e30; // 太陽の質量[kg]
  radiusOfSun = 6.96e5; // 太陽の半径[km]
  oneYear = 31556926; // 1年[sec]
  
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
  
  compareToPlanet(planet) {
    return Math.abs(this.getVolume()- planet.getVolume());
  }
  
  getSurfaceGravity() {
    // NOTE 最後のMath.pow(1000, 2)はkmからmに単位を直すためのもの
    return this.massKg * this.constantOfGravitation / Math.pow(this.meanRadiusKm * 1000, 2);
  }
  
  getDistanceToStarKm() {
    return this.speedOfLight * this.distanceToStarLs / Math.pow(10, 3);
  }

  getOrbitalSpeed() {
    return Math.sqrt((this.massOfSun * this.constantOfGravitation) / (this.getDistanceToStarKm() * 1000));
  }
  
  getOrbitalPeriodYear() {
    return (2 * Math.PI * this.getDistanceToStarKm() * Math.pow(10, 3)) / this.getOrbitalSpeed() / this.oneYear;
  }

}

let mercury = new Planet("Mercury", 3.302e23, 2.4397e3, 1.931e2);
let venus = new Planet("Venus",4.869e24, 6.0518e3, 3.602e2);
let earth = new Planet("Earth", 5.974e24, 6.3782e3, 4.990e2);
let mars = new Planet("Mars", 6.419e23, 3.3972e3, 7.602e2);
let jupiter = new Planet("Jupiter", 1.899e27, 7.1492e4, 2.596e3);
let saturn = new Planet("Saturn", 5.6880e26, 6.0268e4, 4.760e3);
let uranus = new Planet("Uranus", 8.6830e25, 2.5559e4, 9.57e3);
let neptune = new Planet("Neptune", 1.0240e26, 2.4786e04, 15e3);

console.log(earth.getVolume())
console.log(earth.getSurfaceArea());
console.log(earth.compareToPlanet(venus));
console.log(earth.getSurfaceGravity());
console.log(earth.getDistanceToStarKm());
console.log(earth.getOrbitalSpeed());
console.log(earth.getOrbitalPeriodYear());

console.log(saturn.getOrbitalPeriodYear())