Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
    };
  },
  methods: {
    onAddClick() {
      this.goals.push(this.goal);
    },
    onDeleteClick() {
      const index = this.goals.findIndex((item) => item === this.goal);
      if (index > -1) {
        this.goals.splice(index, 1);
      } else {
        alert("Goal not found on the list.Please check again!");
      }
    },
  },
}).mount("#app");
