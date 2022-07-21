<template>
  <div class="Task">
    <div class="container-fluid">
      <!-- Modal -->
      <b-modal id="add-task" ref="my-modal" title="New Task">
        <template slot="modal-header">
          <h4>New Task</h4>
        </template>
        <div class="modal-content">
          <b-input
            type="text"
            placeholder="Summary"
            v-model="form.summary"
          ></b-input>
          <b-input
            type="text"
            placeholder="Decription"
            v-model="form.desc"
          ></b-input>
          <b-form-datepicker
            id="datepicker"
            placeholder="Due Date"
            :min="min"
            v-model="form.dueDate"
            class="mb-2"
          ></b-form-datepicker>
        </div>
        <template slot="modal-footer">
          <div>
            <b-button
              @click="
                form.summary && form.desc && form.dueDate ? saveTask() : ''
              "
              variant="dark"
              >Save</b-button
            >
          </div>
          <div>
            <b-button variant="outline-dark" @click="hideModal"
              >Cancel</b-button
            >
          </div>
        </template>
      </b-modal>
      <!-- Modal -->
      <div class="add-btn" v-b-modal.add-task>
        <font-awesome-icon icon="fa-plus" />

        <span>Add Task</span>
      </div>
      <div class="section">
        <span>Incomplete</span>
        <div
          v-for="(t, i) in getTask.filter((r) => r.incomplete)"
          :key="i"
          class="section-content d-flex align-items-center"
        >
          <b-form-checkbox
            :id="'uncheck' + i"
            size="sm"
            class="mr-1"
            @change="checkedChange(t, i)"
          ></b-form-checkbox>
          <div>
            <div>{{ t.summary }}</div>
            <span>
              <font-awesome-icon icon="fa-clock" />
              {{ t.dueDate }}</span
            >
          </div>
        </div>
      </div>
      <div class="section">
        <span>Completed</span>
        <div
          v-for="(t, i) in getTask.filter((r) => !r.incomplete)"
          :key="i"
          class="section-content d-flex"
        >
          <b-form-checkbox
            :id="'check' + i"
            size="sm"
            class="mr-1"
            checked="true"
            @change="uncheckedChange(t, i)"
          ></b-form-checkbox>
          <div>
            <div>{{ t.summary }}</div>
            <span>
              <font-awesome-icon icon="fa-clock" />
              {{ t.dueDate }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TaskPage",
  data() {
    return {
      min: new Date(),
      form: {
        summary: "",
        desc: "",
        dueDate: "",
        incomplete: true,
      },
    };
  },
  computed: {
    ...mapGetters(["getTask"]),
  },
  mounted() {
    let t = localStorage.getItem("task");
    if (t) {
      this.set_task(JSON.parse(t));
    }
  },
  methods: {
    ...mapActions(["set_task", "append_task"]),
    hideModal() {
      this.$refs["my-modal"].hide();
      this.form = {
        summary: "",
        desc: "",
        dueDate: "",
        incomplete: true,
      };
    },
    saveTask() {
      this.append_task(this.form);
      this.hideModal();
    },
    checkedChange(t, i) {
      this.getTask[i].incomplete = false;
      this.set_task(this.getTask);
    },
    uncheckedChange(t, i) {
      let tt = this.getTask.filter((r) => !r.incomplete);
      tt[i].incomplete = true;
      this.set_task(this.getTask);
    },
  },
};
</script>
