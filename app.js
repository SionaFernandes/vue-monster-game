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
  },
});
