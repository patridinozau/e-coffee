<template>
    <v-dialog width="500" v-model="addtask">
      <template v-slot:activator="{ on }">
        <v-btn color="#523623" style="align-self: center;" v-on="on" class="mt-4 ml-3" text outlined>
          <v-icon>mdi mdi-plus</v-icon>
        </v-btn>
      </template>
  
      <v-card class="formular">
  
        <v-container style="display:flex; justify-content: space-between;">
          
            <v-card-title style="font-size: xx-large" class="font mt-2">
              adauga un task!
            </v-card-title>
  
            <v-btn class="mr-4 mt-6" @click="close()" icon><v-icon>mdi-close</v-icon></v-btn>
  
        </v-container>
  
        <v-form class="mt-5 mr-5 ml-5">
          <div>
            <h3 class="font">titlu:</h3>
            <v-textarea class="textfield font"
                prepend-inner-icon="mdi-pencil"
                counter
                clearable
                no-resize
                v-model="title"
                label="adauga un titlu..."
            ></v-textarea>
          </div>
  
          <div>
            <h3 class="font">detalii:</h3>
            <v-textarea class="textfield font"
                prepend-inner-icon="mdi-pencil"
                counter
                no-resize
                clearable
                v-model="description"
                label="adauga detalii..."
            >adauga detalii</v-textarea>
          </div>
  
          <div align="center">
            <v-btn @click="submit" :loading="loading" type="submit" class="ml-1 mr-1 mb-5 butoane" plain outlined text depresed>trimite</v-btn>
            <v-btn @click="clear" class="ml-1 mr-2 mb-5 butoane" plain outlined text depresed>goleste</v-btn>
          </div>
  
        </v-form>
  
      </v-card>
  
    </v-dialog>
  </template>
  
  <script>
  // import { validationMixin } from 'vuelidate'
  // import { required, maxLength, minLength } from 'vuelidate/lib/validators'
  // const { required, minLength } = require('vuelidate/lib/validators')
  
  export default {
    name: "addTaskForm",
    // props: addtask
  
    // const { required, minLength } = require('vuelidate/lib/validators')
  
    // mixins: [validationMixin],
    // validations: {
    //   title: { required, maxLength: maxLength(15), minLength: minLength(3) },
    //   description: {required, maxLength: maxLength(100)},
    // },
    data: () => ({
      title: '',
      description: '',
      addtask: false,
      loading: false
    }),
    methods: {
      clear ()
      {
        this.loading = true
        this.title = ''
        this.description = ''
        this.loading = false
      },
      submit ()
      {
          const det = {
            title: this.title,
            description: this.description
          }
          console.log(this.title);
          let actualTasks = window.sessionStorage.getItem('tasks');
          if (actualTasks) {
            actualTasks = JSON.parse(actualTasks);
            actualTasks.push(det);
          } else {
            actualTasks = [det];
          }
  
          window.sessionStorage.setItem('tasks', JSON.stringify(actualTasks));
  
          this.addtask = false
          this.loading = false
      },
      close ()
      {
        this.addtask = false;
      }
    }
  }
  </script>
  
  <style scoped>
  
  .formular{
    /*width:20rem;*/
    background-color: #ffe7d6;
    align-content: center;
    justify-content: center;
    /*display: flex;*/
    overflow-y: hidden !important; /* Hide vertical scrollbar */
  }
  
  .textfield{
    height: 30vh;
  }
  
  .v-application .primary--text{
    color: #8f604a !important;
    caret-color: #8f604a !important;
  }
  
  .butoane{
    color: #8f604a !important;
  
  }
  
  .font {
    color: #3e1c06;
    font-size: large;
  }
  
  /*.v-application .primary--text .v-icon {*/
  /*  color: #8f604a !important;*/
  /*  caret-color: #8f604a !important;*/
  /*}*/
  
  /*background-color="#ffefe3"*/
  
  </style>