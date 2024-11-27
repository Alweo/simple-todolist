<template>
  <h1></h1>
  <body>
    <form @submit.prevent="Edit_task">
      <legend>
        <h3>بروزرسانی وظایف</h3>
      </legend>
      <div class="input-group">
        <label for="title">عنوان: </label>
        <input v-model="title" type="text" name="" id="" />
      </div>
      <div class="input-group">
        <label for="title">زمان محاسبه شده: </label>
        <textarea v-model="details"></textarea>
      </div>
      <button class="btn btn-success">تغییر</button>
    </form>
  </body>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      complete: false,
      url_info: "http://localhost:3000/tasks/" + this.id,
    };
  },
  mounted() {
    fetch(this.url_info)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => err.message);
  },
  methods: {
    Edit_task() {
      fetch(this.url_info, {
        method: "PATCH",
        headers: { "Content-Type": "apllication/json" },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => err.message);
    },
  },
};
</script>

<style>
body {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  text-align: center;
  width: 600px;
  height: auto;
  padding: 10px 40px 20px 40px;
  border-radius: 20px;
  background-color: #ffffff;
}

.btn {
  font-family: "iransans";
  background: silver;
  color: black;
  padding: 6px 24px;
  border: none;
  border-radius: 99999px;
  margin: 0 auto;
  transition: all 0.5s ease;
}

.btn:hover {
  cursor: pointer;
  background: #808080;
}

.btn-circle {
  background: silver;
  color: black;
  font-size: 15px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 99999px;
  transition: all 0.5s ease;
}

.btn-circle:hover {
  cursor: pointer;
  background: #808080;
}

.btn-success {
  color: #fff;
  background: #4da64d;
}

.btn-success:hover {
  background: #1a8d1a;
}

.input-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 35px;
}

input[type="text"],
input,
select,
textarea {
  font-family: "iransans-fd";
  border: none;
  border-bottom: 2px solid rgba(192, 192, 192, 0.5);
  width: 100%;
  transition: all 0.5s ease;
  font-size: 16px;
  padding: 5px 8px;
}

textarea {
  height: 150px;
}

input:focus,
textarea:focus {
  border-bottom: 2px solid rgb(165, 165, 165);
  outline: none;
}

legend > h3 {
  font-size: 35px;
}
</style>
