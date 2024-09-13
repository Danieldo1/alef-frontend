<script>
export default {
  name: 'PersonalInfoForm',
  data() {
    return {
      personalInfo: {
        name: '',
        age: null
      },
      children: []
    }
  },
  methods: {
    addChild() {
      if (this.children.length < 5) {
        this.children.push({ name: '', age: null })
      }
    },
    removeChild(index) {
      this.children.splice(index, 1)
    },
    saveInfo() {
      const data = {
        personalInfo: this.personalInfo,
        children: this.children
      }
      localStorage.setItem('formData', JSON.stringify(data))
      this.$router.push('/preview')
    }
  }
}
</script>

<template>
  <div class="personal-info-form">
    <h3>Персональные данные</h3>
    <div class="form-group">
      <div class="input-container">
        <input id="name" v-model="personalInfo.name" type="text" autocomplete="off" />
        <label for="name">Имя</label>
      </div>
    </div>
    <div class="form-group">
      <div class="input-container">
        <input id="age" v-model.number="personalInfo.age" type="number" autocomplete="off" />
        <label for="age">Возраст</label>
      </div>
    </div>

    <div class="child-btn">
      <h3>Дети (макс. 5)</h3>
      <button v-if="children.length < 5" @click="addChild" class="add-btn">
        <svg class="plus-sign" viewBox="0 0 24 24" width="20" height="20">
          <path
            d="M12 2v20M2 12h20"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <span class="button-text">Добавить ребенка</span>
      </button>
    </div>

    <div v-for="(child, index) in children" :key="index" class="child-info">
      <div class="input-container">
        <input v-model="child.name" type="text" autocomplete="off" />
        <label>Имя</label>
      </div>
      <div class="input-container">
        <input v-model.number="child.age" type="number" aria-required autocomplete="off" />
        <label>Возраст</label>
      </div>
      <button @click="removeChild(index)" class="remove-btn">Удалить</button>
    </div>

    <button @click="saveInfo" class="save-btn">Сохранить</button>
  </div>
</template>

<style scoped>
.personal-info-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

h2,
h3 {
  text-align: left;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}
.input-container {
  position: relative;
}

input {
  width: 100%;
  padding: 22px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
}

input:focus,
input:not(:placeholder-shown) {
  padding-top: 30px;
  padding-bottom: 14px;
}

.child-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: 15px;
  margin-bottom: 10px;
}

label {
  position: absolute;
  left: 12.5px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
  transition: 0.2s ease all;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  top: 25%;
  font-size: 15px;
  color: gray;
  background-color: white;
  margin-left: 10px;
}

.child-info {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}

.child-info .form-group {
  flex: 1;
  margin-right: 10px;
}

.remove-btn {
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
  justify-self: center;
}

.remove-btn:hover {
  opacity: 0.7;
  transition: opacity 0.3s;
}

.add-btn {
  background: none;
  display: flex;
  align-items: center;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
}

.add-btn .plus-sign {
  margin-right: 10px;
}

.add-btn .button-text {
  line-height: 1;
}

.add-btn:hover {
  background-color: var(--color-primary);
  color: #fff;
}

.save-btn {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.save-btn:hover {
  background-color: #0077cc;
}
</style>
