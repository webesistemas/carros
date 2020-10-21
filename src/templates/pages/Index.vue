<template>
<div>
  <Menu />
<b-container>
   <router-view />
</b-container>
<div class="text-center">
<Loading v-if="load" />
</div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import Menu from './../components/Menu.vue'
import Loading from './../components/Loading.vue'
export default {
  name: 'Index',
  components: { Menu, Loading },
  computed: {
    ...mapState(['load']),
    ...mapState(['message'])
  }
}
</script>
