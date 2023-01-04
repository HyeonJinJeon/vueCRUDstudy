<template>
  <div class="home">
    <nav>

    </nav>
    <table class="table " border="1" style="margin-left: auto; margin-right: auto;">
      <thead>
      <tr>
        <th>이름</th>
        <th>나이</th>
        <th>성별</th>
        <th>id</th>
        <th>상세 정보</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(rows,i) in rows" :key="i">
          <td>{{rows.name}}</td>
          <td>{{rows.age}}</td>
          <td>{{rows.gender}}</td>
          <td>{{rows.id}}</td>
          <td><b-button variant="info" @click="goDetail(i)">상세 정보</b-button></td>
        </tr>
      </tbody>
    </table>
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
      rows: [],
    }
  },
  methods: {
    getDataList(){
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id //각 유저 필드에 따로 id값이 없지만 유저 고유 id를 불로올 수 있음
              console.log(_data)
              self.rows.push(_data);
            });
          })
    },
    init(){
      this.getDataList()
    },
    goDetail(i){
      this.$router.push({name: 'DetailUserData', params: {id: this.rows[i].id}}).catch(()=>{});
    }
  },
  mounted() {
    const self = this;
    self.init();
  },
  components: {

  }
}
</script>
