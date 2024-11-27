<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: current === 'all' }">
      نمایش همه
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      اتمام شده ها
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      در حال انجام
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
.filter-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.filter-nav > button {
  font-family: "iransans";
  font-weight: 700;
  background-color: #d9d9d9;
  border: none;
  border-radius: 999999px;
  padding: 5px 25px;
  color: #222;
  transition: all 0.5s ease;
}

.filter-nav > button:hover {
  cursor: pointer;
  background-color: #b0b0b0;
}

.active {
  background-color: #707070 !important;
  color: #fff !important;
}
</style>
