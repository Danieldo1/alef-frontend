  <script>
  export default {
  name: 'Preview',
  data() {
    return {
      formData: null
    }
  },
  created() {
    const savedData = localStorage.getItem('formData')
    if (savedData) {
      this.formData = JSON.parse(savedData)
    }
  }
}
  </script>


<template>
    <div class="preview">
      <div v-if="formData">
        <h3>Персональные данные</h3>
        <p class="parent-info">{{ formData.personalInfo.name }}, {{ formData.personalInfo.age }} лет</p>
  
        <h3>Дети</h3>
        <div v-for="(child, index) in formData.children" :key="index" class="child-info">
          <p class="child">{{ child.name }}, {{ child.age }} лет</p>
        </div>
      </div>
      <div v-else>
        <p>Заполните форму.Данные не существуют</p>
      </div>
    </div>
  </template>


  <style scoped>
  .preview {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
  }
  .parent-info {
    margin: 20px 0 40px 0;
    font-size: 18px;
    font-weight: 800;
  }

  .child-info {
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 16px;
    background-color: rgb(231, 231, 231);
    inline-size: max-content;
    border-radius: 8px;
  }

  .child {
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 800;
  }
  </style>