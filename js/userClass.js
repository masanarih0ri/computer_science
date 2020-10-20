class User {
    constructor(username, firstName, lastName, email, passwordHashed, birthMonth, birthYear, biographyDescription, favoriteHikingLocation) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordHashed = passwordHashed;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.biographyDescription = biographyDescription;
        this.favoriteHikingLocation = favoriteHikingLocation;
    }
    
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    getAge() {
      return new Date().getFullYear() - this.birthYear;
    }
    
    birthdayCalculator() {
      if(this.birthMonth > new Date().getMonth() + 1) {
        return this.birthMonth - new Date().getMonth + 1;
      }
      return 12 - (new Date().getMonth() + 1 - this.birthMonth);
    }
    
    showProfile() {
      return `
      name: ${this.firstName} ${this.lastName}\n
      birthYear: ${this.birthYear}\n
      biographyDescription: ${this.biographyDescription}\n
      favoriteHikingLocation:${this.favoriteHikingLocation}`
    }
    
    confirmPassword(strPassword) {
      const hashedPassword = hashPassword(strPassword);
      return hashedPassword === hashPassword(this.passwordHashed);
    }
}

function hashPassword(password){
    var hash = 0;
    for (var i = 0; i < password.length; i++) {
        var character = password.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

let claire = new User("claireS", "Claire", "Simmons", "clairesimmons@gmail.com", "lmnlmn", 9, 2007, "Passionate gamer. Evil internet aficionado. Student. Friendly tv specialist. Introvert.", "Hollywood Sign Hike");

console.log(claire.getFullName());
console.log(claire.getAge());
console.log(claire.birthdayCalculator());
console.log(claire.showProfile());
console.log(claire.confirmPassword("lmnlmn"));