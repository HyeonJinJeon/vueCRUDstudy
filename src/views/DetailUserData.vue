<template>
  <div class="home">
    <p>ID: {{docId}}</p>
    <p>이름: {{row.name}}</p>
    <p>나이: {{row.age}}</p>
    <p>성별: {{row.gender}}</p>
    <p>학교: {{row.school}}</p>
    <p>학번: {{row.schoolNum}}</p>
    <p>전화번호: {{row.phoneNum}}</p>
    <b-button variant="primary" @click="goModify">수정하기</b-button>
    <b-button variant="danger" @click="deleteUser">삭제하기</b-button>
  </div>
</template>

<script>
// @ is an alias to /src


import {firebase} from '@/firebase/firebaseConfig';

export default {
  name: 'home',
  data(){
    return {
      fbCollection: 'users',
      row: {},
      docId: this.$route.params.id,
    }
  },
  methods: {
    getData(){
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(this.docId)
          .get()
          .then((snapshot)  => {
            const _data = snapshot.data();
            this.row = _data
          })
    },
    deleteUser(){
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(this.docId)
          .delete()
          .then(() => {
            self.$router.push('/')
          })
    },
    goModify(){
      this.$router.push({name: 'ModifyUserData', params: {id: this.docId}}).catch(()=>{});
    },
    init(){
      this.getData()
    },

  },
  mounted() {
    const self = this;
    self.init();
  },
  components: {

  }
}
</script>
