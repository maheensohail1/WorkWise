<template>
    <!-- <Hero title="Test Title" subtitle ="Test Subtitle"/> -->
    <Hero />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<style></style>