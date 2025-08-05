class myFavoriteGaeme {
  constructor (name, genre, platform = 'PC', os = 'Windows') {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
    this.os = os;
  }
  getDetails() {
    return `Name: ${this.name}, Genre: ${this.genre}, Platform: ${this.platform}, OS: ${this.os}`;
  }
}
const game1 = new myFavoriteGaeme('The Witcher 3', 'RPG');
const game2 = new myFavoriteGaeme('Halo', 'FPS', 'Xbox', 'Windows');
const game3 = new myFavoriteGaeme('Stardew Valley', 'Simulation', 'PC', 'Linux');
const game4 = new myFavoriteGaeme('God of War', 'Action', 'PS4', 'PlayStation');
const game5 = new myFavoriteGaeme('Minecraft', 'Sandbox', 'PC', 'Windows');
const game6 = new myFavoriteGaeme('Final Fantasy VII', 'RPG', 'PC', 'Windows');
const game7 = new myFavoriteGaeme('Overwatch', 'FPS', 'PC', 'Windows');
const game8 = new myFavoriteGaeme('The Legend of Zelda: Breath of the Wild', 'Action-Adventure', 'Switch', 'Nintendo');
const game9 = new myFavoriteGaeme('Dark Souls', 'Action RPG', 'PC', 'Windows');
const game10 = new myFavoriteGaeme('Animal Crossing: New Horizons', 'Simulation',
  'Switch', 'Nintendo');
const game11 = new myFavoriteGaeme('Cyberpunk 2077', 'RPG', 'PC', 'Windows');
const game12 = new myFavoriteGaeme('Apex Legends', 'Battle Royale', 'PC', 'Windows');

for (let i = 1; i <= 12; i++) {
  const game = eval(`game${i}`);
  console.log(game.getDetails());
}
