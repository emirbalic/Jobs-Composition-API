<template>
  <img
    :src="imageLink"
    alt="Cato"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
  export default {
    name: 'ProfileImage',
    data() {
      return {
        imageLink: "https://res.cloudinary.com/motofy/image/upload/v1646952642/kvio4k3cjplfdu7yt415.jpg",
      };
    },
  };
</script>