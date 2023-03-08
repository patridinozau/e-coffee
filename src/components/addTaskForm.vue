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
              Adaugă un task!
            </v-card-title>
  
            <v-btn class="mr-4 mt-6" @click="close()" icon><v-icon>mdi-close</v-icon></v-btn>
  
        </v-container>
  
        <v-form class="mt-5 mr-5 ml-5">
          <div>
            <h3 class="font">Titlu:</h3>
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
            <h3 class="font">Detalii:</h3>
            <v-textarea class="textfield font"
                prepend-inner-icon="mdi-pencil"
                counter
                no-resize
                clearable
                v-model="description"
                label="adauga detalii..."
            >adaugă detalii</v-textarea>
          </div>
  
          <div align="center">
            <v-btn @click="submit" :loading="loading" type="submit" class="ml-1 mr-1 mb-5 butoane font-weight-bold" plain outlined text depresed>trimite</v-btn>
            <v-btn @click="clear" class="ml-1 mr-2 mb-5 butoane font-weight-bold" plain outlined text depresed>golește</v-btn>
          </div>
  
        </v-form>
  
      </v-card>
  
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "addTaskForm",
    
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

  
  .formular{
    background-color: #ffe7d6;
    align-content: center;
    justify-content: center;
    /*display: flex;*/
    overflow-y: hidden !important; /* Hide vertical scrollbar */
    font-family: 'Montserrat', sans-serif;
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
  
  </style>