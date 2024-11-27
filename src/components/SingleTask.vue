<template>
  <div class="task" :class="{ 'doned-task': task.complete }">
    <div class="actions">
      <h4 @click="Change_details()">{{ task.title }}</h4>
      <div class="icons">
        <router-link :to="{ name: 'EditTask', params: { id: task.id } }">
          <span class="material-icons-round icon-span"> edit </span>
        </router-link>
        <span class="material-icons-round" @click="Delete_task"> delete </span>
        <span
          class="material-icons-round"
          @click="Done_task"
          :class="{ 'doned-task-icon': task.complete }"
        >
          done
        </span>
      </div>
    </div>
    <div class="details" v-if="task_deails_state">
      <p>جزئیات : {{ task.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      task_deails_state: false,
      url_info: "http://localhost:3000/tasks/" + String(this.task.id),
    };
  },
  methods: {
    Change_details() {
      this.task_deails_state = !this.task_deails_state;
    },
    Delete_task() {
      fetch(this.url_info, { method: "DELETE" }).then(() =>
        this.$emit("delete", this.task.id)
      );
    },
    Done_task() {
      fetch(this.url_info, {
        method: "PATCH",
        headers: { "Content-Type": "apllication/json" },
        body: JSON.stringify({ complete: !this.task.complete }),
      })
        .then(() => this.$emit("complete", this.task.id))
        .catch((err) => err.message);
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.task {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-right: 5px solid#8DAB7F;
  transition: all 0.5s ease;
}

h4 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icons > span,
.icon-span {
  color: #fff;
  transition: all 0.5s ease;
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  background-color: #466266;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
}

.icons > span:hover {
  background-color: #233133;

  cursor: pointer;
}

.doned-task {
  border-right: 15px solid#466266 !important;
}

.doned-task > .actions > h4 {
  font-size: 18px !important;
  font-weight: 900;
}

.doned-task-icon {
  font-weight: 900;
  color: #006600 !important;
  background-color: #edeff0 !important;
}
</style>
