<template>
  <div class="Location">
    <div class="container-fluid">
      <div class="add-btn">
        <font-awesome-icon icon="fa-plus" />
        <span>Check In</span>
      </div>
      <div class="section">
        <span>Current Location</span>
        <div
          v-for="(p, i) in location.filter((r) => r.status)"
          :key="i"
          class="section-content d-flex"
        >
          <font-awesome-icon icon="fa-map-pin" class="icon" />
          <div>
            <div>{{ p.title }}</div>
            <span>{{ p.lat }},{{ p.lng }}</span>
          </div>
        </div>
      </div>
      <div class="section">
        <span>Previous Location</span>
        <div v-for="(p, i) in location" :key="i" class="section-content d-flex">
          <font-awesome-icon icon="fa-map-pin" class="icon" />
          <div>
            <div>{{ p.title }}</div>
            <span>{{ p.lat }},{{ p.lng }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocationPage",
  data() {
    return {
      location: [
        {
          title: "Pustegrand, Stockholm, SE",
          lat: "59.3293 N",
          lng: "18.0656 E",
          status: true,
        },
        {
          title: "Halsingegatan, Stockholm, SE",
          lat: "59.3293 N",
          lng: "18.0656 E",
        },
        {
          title: "Pustegrand, Stockholm, SE",
          lat: "59.3293 N",
          lng: "18.0656 E",
        },
        {
          title: "Langa Gatan, Stockholm, SE",
          lat: "59.3293 N",
          lng: "18.0656 E",
        },
        {
          title: "Djurgarden, Stockholm, SE",
          lat: "59.3293 N",
          lng: "18.0656 E",
        },
        {
          title: "Svartensgatan, Stockholm, SE",
          lat: "59.3293 N",
          lng: "18.0656 E",
        },
      ],
    };
  },
};
</script>
