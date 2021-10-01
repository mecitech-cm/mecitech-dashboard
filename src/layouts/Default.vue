<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />
      <div
        class="w-full min-h-screen pl-0 bg-gray-100 lg:pl-64"
        :class="sideBarOpen ? 'overlay' : ''"
        id="main-content"
      >
        <Navbar />
        <div class="p-6 mb-20 bg-gray-100">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Sidebar from '@/components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'Dashboard',
  computed: {
    ...mapState(['sideBarOpen']),
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
};
</script>
