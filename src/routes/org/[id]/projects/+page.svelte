<script>
  import { dayjs } from '$lib/day'

  export let data;

  const org = data.org;

</script>


<div class="w-full h-full flex flex-col p-3">
  <div class="w-full h-14 flex justify-between">
    <!-- <div class="text-md" contenteditable="true" bind:textContent={data.header.title}>{data.header.title}</div> -->
    <div class="flex gap-3">
      {org.name}
      
      <a href="#">Share</a>
      <a href="#">Options</a>
    </div>
  </div>
</div>