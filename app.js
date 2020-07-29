new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isgamerunning: false,
    logs: [],
  },
  methods: {
    startGame() {
      this.isgamerunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      let damage = this.calaculateDamage(3, 10);
      this.monsterHealth -= damage;

      this.logs.unshift({
        isPlayer: true,
        text: "Player hits Monster for" + " " + damage,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack() {
      let damage = this.calaculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.logs.unshift({
        isPlayer: true,
        text: "Player hits Monster for" + " " + damage,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.logs.unshift({
        isPlayer: true,
        text: "Player heals for 10",
      });
      this.monsterAttack();
    },
    giveUp() {
      this.isgamerunning = false;
      this.logs = [];
    },
    monsterAttack() {
      let damage = this.calaculateDamage(5, 12);
      this.playerHealth -= damage;
      this.logs.unshift({
        isPlayer: false,
        text: "Monster hits Player for" + " " + damage,
      });
      this.checkWin();
    },
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
