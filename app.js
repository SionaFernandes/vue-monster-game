new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isgamerunning: false,
  },
  methods: {
    startGame() {
      this.isgamerunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.monsterHealth -= this.calaculateDamage(3, 10);
      if (this.checkWin()) {
        return;
      }
      this.playerHealth -= this.calaculateDamage(5, 12);
      this.checkWin();
    },
    specialAttack() {},
    heal() {},
    giveUp() {},
    calaculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won the game!! New Game ?")) {
          this.startGame();
        } else {
          this.isgamerunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost the game!! New Game ?")) {
          this.startGame();
        } else {
          this.isgamerunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
