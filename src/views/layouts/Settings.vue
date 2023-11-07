<template>
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Grid -->
    <div
      class="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center lg:justify-center lg:min-h-screen"
    >
      <div class="lg:col-span-3 justify-self-center">
        <ol
          class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400"
        >
          <li class="mb-10 ml-6">
            <RouterLink to="/basic-infos">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
              >
                <IconCheckIn />
              </span>
              <h3 class="font-medium leading-tight">Informations Basic</h3>
              <p class="text-sm">
                L'etape de renseignement de vos informations personnels
              </p>
            </RouterLink>
          </li>
          <li class="mb-10 ml-6">
            <RouterLink to="/business-infos">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              >
                <IconBusinessCard class="icon" />
              </span>
              <h3 class="font-medium leading-tight">Carte d'affaire</h3>
              <p class="text-sm">
                Les informations generales sur votre restaurant
              </p>
            </RouterLink>
          </li>
          <li class="mb-10 ml-6">
            <RouterLink to="/location">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              >
                <IconLocation />
              </span>
              <h3 class="font-medium leading-tight">
                Information geographiques
              </h3>
              <p class="text-sm">
                Les information su vos lieu de frequentation
              </p>
            </RouterLink>
          </li>
          <li class="mb-10 ml-6">
            <RouterLink to="/preferences">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              >
                <IconHeartPusle />
              </span>
              <h3 class="font-medium leading-tight">Preferences</h3>
              <p class="text-sm">
                Les information su vos preferences gastronomiques
              </p>
            </RouterLink>
          </li>
          <li class="mb-10 ml-6">
            <RouterLink to="/payment-infos">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              >
                <IconPayGetwaay />
              </span>
              <h3 class="font-medium leading-tight">Options de Payments</h3>
              <p class="text-sm">
                Les informations sur vos methodes de payment
              </p>
            </RouterLink>
          </li>
          <li class="mb-10 ml-6">
            <RouterLink to="/notifications">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
              >
                <IconRingBell />
              </span>
              <h3 class="font-medium leading-tight">
                Options de Notifications
              </h3>
              <p class="text-sm">
                L'etape de configiration des options de notifications
              </p>
            </RouterLink>
          </li>
        </ol>
      </div>
      <!-- End Col -->

      <div class="lg:col-span-5 w-7/12 card">
        <RouterView />
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import IconCheckIn from "@/components/icons/IconCheckIn.vue";
import IconBusinessCard from "@/components/icons/IconBusinessCard.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import IconHeartPusle from "@/components/icons/IconHeartPusle.vue";
import IconRingBell from "@/components/icons/IconRingBell.vue";
import IconPayGetwaay from "@/components/icons/IconPayGetwaay.vue";
import type { Consumers } from "@/types/Consumers";
import type { Restaurants } from "@/types/Restaurants";


</script>

<style scoped>
.router-link-active {
  @apply text-neutral-800;
}

.router-link-active span {
  @apply bg-green-200;
}
.router-link-active span svg {
  @apply text-neutral-50;
}

.router-link-active span .icon {
  @apply text-neutral-50;
}

.card {
  @apply mx-auto lg:p-5 md:p-4 shadow-lg drop-shadow-xl rounded-lg border;
}
</style>
