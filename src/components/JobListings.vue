<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <!--Show loading spinner while loaidng is true-->
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <!--Show job lisitng when done loading-->
            <div v-else class="grid grid-cols-1 gap-6
         md:grid-cols-3">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
      <!-- <button @click="addall"> Add all</button> -->
    </section>
</template>

<script setup>
import jobData from '@/jobs2-1.json'
import { reactive, defineProps, onMounted } from 'vue'
import JobListing from './JobListingSingl.vue';
import { RouterLink } from 'vue-router'
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { db } from '@/firebase';
import { collection, getDocs, addDoc} from "firebase/firestore";


defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})


const state = reactive({
    jobs: [],
    isLoading: true
});

onMounted(async ()=>{
    try {
        // const response = await axios.get('/api/jobs');
        // state.jobs = response.data;

        const querySnapshot = await getDocs(collection(db, 'jobs'));
        querySnapshot.forEach((doc) => {
            state.jobs.push({ id: doc.id, ...doc.data() }); // Add the Firebase document ID as `id` and data
        });
    }
    catch (error) {
        console.log("Error fetching" + error)
    }
    finally {
        state.isLoading = false;
    }
})

// const addall = async () =>{
//     try {
//     const jobsCollection = collection(db, 'jobs');

//     for (const job of jobData) {
//       await addDoc(jobsCollection, job);
//       console.log('Job added:', job.title);
//     }

//     console.log('All jobs uploaded!');
//   } catch (error) {
//     console.error('Error uploading jobs:', error);
//   }

// }


</script>

<style></style>