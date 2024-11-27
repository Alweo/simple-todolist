<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
        <SingleTask
          :task="task"
          @delete="Handle_delete"
          @complete="Handle_complete"
        ></SingleTask>
      </div>
    </div>
    <div v-else>وظایف در حال بارگذاری...</div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleTask from "@/components/SingleTask.vue";
import FilterNav from "@/components/FilterNav.vue";
import { handleError } from "vue";

export default {
  name: "HomeView",
  components: { SingleTask, FilterNav },
  data() {
    return {
      tasks: [],
      current: "all",
    };
  },
  computed: {
    filteredTasks() {
      if (this.current === "completed") {
        return this.tasks.filter((item) => item.complete);
      } else if (this.current === "ongoing") {
        return this.tasks.filter((item) => !item.complete);
      } else {
        return this.tasks;
      }
    },
  },
  methods: {
    Handle_delete(id) {
      this.tasks = this.tasks.filter((item) => item.id !== id);
    },
    Handle_complete(id) {
      let f = this.tasks.find((item) => item.id === id);
      f.complete = !f.complete;
    },
    // handleFilter() {},
  },
  mounted() {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => (this.tasks = data))
      .catch((err) => alert(err.message));
  },
};
</script>
