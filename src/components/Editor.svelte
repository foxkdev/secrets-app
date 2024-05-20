<script>
	import { onMount } from 'svelte';
  import BlockText from './BlockText.svelte';
	import { updatePage } from '$api/page';
	import BlockContentEditable from './BlockContentEditable.svelte';
	import { blocksTypes } from '$lib/blocksTypes';

  export let page;

  const onEnter = (e) => {
    const idx = e.detail.idx || 0;
    addBlock(idx, 'h1')
    focusBlock(idx + 1)
  }

  const onBackspace = (e) => {
    const idx = e.detail.idx || 0;
    removeBlock(idx)
    focusBlock(idx - 1)
  }
  

  const onMove = (e) => {
    const idx = e.detail.idx;
    const direction = e.detail.direction;
    
    // focus to up or down block
    if (direction === 'ArrowUp' && idx > 0) {
      focusBlock(idx - 1)
    } else if (direction === 'ArrowDown' && idx < page.blocks.length - 1) {
      focusBlock(idx + 1)
    }
  }
  

  const onUpdate = (e) => {
    page.blocks[e.detail.idx].content = e.detail.content;
  }


  const onUpdateTitle = (e) => {
    page.header.title = e.detail.target.innerText
  }
  const addBlock = (idx, type = 'text') => {
    page.blocks = [
      ...page.blocks.slice(0, idx + 1),
      blocksTypes[type],
      ...page.blocks.slice(idx + 1)
    ]
  }
  const removeBlock = (idx) => {
    if (page.blocks.length > 1) {
      page.blocks = [
        ...page.blocks.slice(0, idx),
        ...page.blocks.slice(idx + 1)
      ]
    }
  }
  const focusBlock = (idx) => {
    setTimeout(() => {
      if(idx < 0) return;
      const blocks = document.querySelectorAll('.block')
      const blockContent = blocks[idx].querySelector('.block-content')
      blockContent.focus();
      
    }, 0)
  
  }

  onMount(() => {
    focusBlock(0)

    setInterval(() => {
      console.log('Updating page', page)
      updatePage(page.id, page)
    }, 5000)
  })


</script>

<div class="p-12 flex flex-col w-full h-full">
  <BlockContentEditable classNames="text-5xl font-bold" content={page.header.title} on:input={onUpdateTitle} placeholder="Without Title" />

  {#each page.blocks as block, idx}
  {#if block.type === 'text'}
    <BlockText content={block.content} style={block.style} on:enter={onEnter} on:backspace={onBackspace} on:move={onMove} on:update={onUpdate} {idx} />
  {/if}
  {/each}
</div>
