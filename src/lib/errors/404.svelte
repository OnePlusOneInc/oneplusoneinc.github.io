<script lang="ts">
  import hero from '$lib/assets/404.svg';
  import Text from '$lib/components/Text.svelte';
</script>

<div class="h-screen p-4 flex flex-col flex-nowrap align-middle justify-center items-center bg-primary-light dark:bg-primary-dark">
  <img class="w-32" src={hero} alt="">
  <Text type="largeTitle" class="mt-6 mb-4">Not found</Text>
  <Text type="copy">The page you're looking for doesn't exist</Text>
</div>